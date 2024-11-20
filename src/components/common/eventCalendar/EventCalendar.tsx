import { useState } from "react";
import Calendar from "react-calendar";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";

import "./EventCalendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function EventCalendar() {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="MM/YYYY" />
                <button className="btn btn-outline-primary px-4" type="button">
                    Go
                </button>
            </div>
            <div>
                <Calendar
                    // onChange={onChange}
                    value={value}
                    className={"bg-light-subtle"}
                    selectRange={false}
                    showFixedNumberOfWeeks={true}
                    prevLabel={<MdKeyboardArrowLeft />}
                    nextLabel={<MdKeyboardArrowRight />}
                    prev2Label={<MdKeyboardDoubleArrowLeft />}
                    next2Label={<MdKeyboardDoubleArrowRight />}
                    view={"month"}
                    tileDisabled={() => {
                        return true;
                    }}
                />
            </div>
            <button
                type="button"
                onClick={() => {
                    onChange(new Date());
                }}
                className="btn btn-outline-primary mt-3 px-4"
            >
                Today
            </button>
            <hr />
            <div className="text-start">
                <div className="fs-5">{value?.toLocaleString("en-US", { month: "long" })}</div>
            </div>
        </>
    );
}

export default EventCalendar;
