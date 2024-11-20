import { Fragment, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { useReactTable, getCoreRowModel, getExpandedRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, ColumnDef, flexRender, Row } from "@tanstack/react-table";
import { makeData, Book } from "../../../Data/BooksFetchData";

const getDynamicDetails = (status: string) => {
    switch (status) {
        case "available":
            return {
                statusClass: "text-primary",
                actionButton: "Borrow",
                actionClass: "btn-outline-primary",
            };
        case "not available":
            return {
                statusClass: "text-secondary",
                actionButton: "Borrowed",
                actionClass: "btn-outline-secondary disabled",
            };
        default:
            return {
                statusClass: "text-secondary",
                actionButton: "Room Use Only",
                actionClass: "btn-outline-secondary disabled",
            };
    }
};

const columns: ColumnDef<Book>[] = [
    {
        id: "expander",
        header: () => null,
        cell: ({ row }) =>
            row.getCanExpand() ? (
                <button
                    className="btn p-0 border-0"
                    {...{
                        onClick: row.getToggleExpandedHandler(),
                        style: { cursor: "pointer" },
                    }}
                >
                    {row.getIsExpanded() ? <IoMdArrowDropdown className="fs-4" /> : <IoMdArrowDropright className="fs-4" />}
                </button>
            ) : null,
    },
    {
        accessorFn: (row) => row.title,
        id: "title",
        header: () => <div>Title</div>,
        cell: (info) => info.getValue(),
    },
    {
        accessorFn: (row) => row.author,
        id: "author",
        header: () => <div>Author</div>,
        cell: (info) => info.getValue(),
    },
    {
        accessorFn: (row) => row.status,
        id: "status",
        header: () => <div className="text-center">STATUS</div>,
        cell: (row) => {
            const { statusClass } = getDynamicDetails(row.row.original.status);
            return <div className={`badge fst-italic text-uppercase fs-10 w-100 px-2 ${statusClass}`}>{row.row.original.status}</div>;
        },
    },
    {
        id: "action",
        header: () => <div className="text-center">ACTION</div>,
        cell: (row) => {
            const { actionButton, actionClass } = getDynamicDetails(row.row.original.status);
            return <button className={`btn text-nowrap text-uppercase fs-10 w-100 px-1 ${actionClass}`}>{actionButton}</button>;
        },
    },
];

function BooksTable() {
    const [data] = useState(() => makeData(1000));
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const renderSubComponent = ({ row }: { row: Row<Book> }) => {
        const { statusClass } = getDynamicDetails(row.original.status);
        return (
            <>
                <div className="row px-4 py-3 rounded shadow">
                    <div className="row py-3 m-0 bg-body-tertiary rounded-4 shadow border">
                        <div className="col-8 m-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent ">
                                    <span className="fs-5 fw-semibold">{row.original.title}</span>
                                </li>
                                <li className="list-group-item bg-transparent">
                                    <span className="fw-semibold me-2">Author: </span>
                                    <span className="fst-italic fs-8">{row.original.author}</span>
                                </li>
                                <li className="list-group-item bg-transparent">
                                    <span className="fw-semibold me-2">Genre: </span>
                                    <span className="fst-italic fs-8">{row.original.genre}</span>
                                </li>
                                <li className="list-group-item bg-transparent">
                                    <span className="fw-semibold me-2">Series: </span>
                                    <span className="fst-italic fs-8">{row.original.series}</span>
                                </li>
                                <li className="list-group-item bg-transparent">
                                    <span className="fw-semibold me-2">Publisher: </span>
                                    <span className="fst-italic fs-8">{row.original.publisher}</span>
                                </li>
                                <li className="list-group-item bg-transparent">
                                    <span className="fw-semibold me-2">Book Format: </span>
                                    <span className="fst-italic fs-8">{row.original.bookFormat}</span>
                                </li>
                                <li className="list-group-item bg-transparent">
                                    <span className="fw-semibold me-2">ISBN: </span>
                                    <span className="fst-italic fs-8">{row.original.isbn}</span>
                                </li>
                                <li className="list-group-item bg-transparent d-flex">
                                    <span className="fw-semibold me-2 my-auto">Status: </span>
                                    <span className={`fst-italic fs-4 text-uppercase ${statusClass}`}>{row.original.status}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 pt-3">
                            <div className="text-center mb-2">
                                <div className="fs-8 text-uppercase">Access Number: </div>
                                <div className="fs-9 fw-semibold">{row.original.accessNumber}</div>
                            </div>
                            <div className="text-center">
                                <img src={row.original.img} alt="Avatar" className="img-fluid rounded" />
                            </div>
                            <div className="text-center my-3 px-1">
                                <button className="btn btn-primary text-uppercase btn-sm w-100 py-2">borrow</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const table = useReactTable({
        data,
        columns,
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            pagination,
            // sorting: [
            //     {
            //         id: "title",
            //         desc: true,
            //     },
            // ],
        },
    });

    return (
        <div>
            <div className="d-flex px-2 my-2">
                <select className="form-select form-select-sm rounded w-25" value={table.getState().pagination.pageSize} onChange={(e) => table.setPageSize(Number(e.target.value))}>
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <span className="ms-auto">
                    Go to page:
                    <input
                        type="number"
                        min="1"
                        max={table.getPageCount()}
                        defaultValue={table.getState().pagination.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            table.setPageIndex(page);
                        }}
                        className="border p-1 rounded ms-3 text-center"
                    />
                </span>
            </div>

            <div className="p-2 shadow border rounded-3 pb-0 mb-3">
                <table className="table table-responsive w-100 table-sm align-middle fs-7">
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} colSpan={header.colSpan}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <Fragment key={row.id}>
                                <tr>
                                    {row.getVisibleCells().map((cell) => (
                                        <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                    ))}
                                </tr>
                                {row.getIsExpanded() && (
                                    <tr>
                                        <td colSpan={row.getVisibleCells().length}>{renderSubComponent({ row })}</td>
                                    </tr>
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>

                <div className="px-2">
                    <nav className="">
                        <ul className="pagination">
                            <span className="d-flex justify-content-center align-items-center">
                                <span className="me-2">Page</span>
                                <strong>
                                    {table.getState().pagination.pageIndex + 1} of {table.getPageCount().toLocaleString()}
                                </strong>
                            </span>
                            <li className="page-item ms-auto">
                                <button className="page-link" onClick={() => table.firstPage()} disabled={!table.getCanPreviousPage()}>
                                    <MdKeyboardDoubleArrowLeft />
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                                    <MdKeyboardArrowLeft />
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                                    <MdKeyboardArrowRight />
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="page-link" onClick={() => table.lastPage()} disabled={!table.getCanNextPage()}>
                                    <MdKeyboardDoubleArrowRight />
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default BooksTable;
