import BooksTable from "../../components/user/tables/BooksTable";

function BooksPage() {
    return (
        <>
            <div id="books">
                <div className="input-group mx-auto mb-3 shadow-sm rounded-pill">
                    <input type="text" className="form-control rounded-start-pill py-1 px-3" placeholder="Search library collection here.." />
                    <button className="btn btn-primary border-2 border-primary text-onPrimary rounded-end-pill py-1 px-3">Search</button>
                </div>

                <div className="d-flex align-items-center mt-3 mb-2">
                    <span className="fw-bold">Reminder: </span>
                    <span className="fs-7 ms-3">
                        If for <button className="btn btn-outline-secondary fs-10 p-1 disabled my-1 mx-2">ROOM USE ONLY</button> kindly proceed directly to the librarian.
                    </span>
                </div>

                <div className="accordion" id="accordionPanelsInstructions">
                    <div data-aos="fade-in" className="accordion-item border border-0 mb-1">
                        <h2 className="accordion-header d-flex">
                            <div>
                                <button className="accordion-button shadow-none bg-body d-block pb-0 text-primary p-0" type="button" data-bs-toggle="collapse" data-bs-target="#bookInstructions">
                                    <h6 className="fs-7">View instructions</h6>
                                </button>
                            </div>
                        </h2>
                        <div id="bookInstructions" className="collapse">
                            <div className="accordion-body p-0">
                                <button className="btn btn-outline-primary fs-8 p-1 disabled my-1 px-3">
                                    <i className="fa-solid fa-upload fa-sm"></i>
                                    <span className="ps-1">BORROW</span>
                                </button>
                                <span className="fs-7"> - Allows users to and bring home up to two non-reserved books at a time</span>
                                <br />
                                <button className="btn btn-outline-secondary fs-8 p-1 disabled my-1">ROOM USE ONLY</button>
                                <span className="fs-7"> - Users can use books within the library room only cannot take them outside</span>
                                <br />
                                <button className="btn btn-outline-secondary fs-8 p-1 disabled my-1 px-3">BORROWED</button>
                                <span className="fs-7"> - Signifies that all copies of a particular book are currently on loan or borrowed</span>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>

                <BooksTable></BooksTable>
            </div>
        </>
    );
}

export default BooksPage;
