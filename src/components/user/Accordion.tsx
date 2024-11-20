import AccordionShapeOpen from "../../assets/images/accordion-shape-open.png";
import AccordionShapeClose from "../../assets/images/accordion-shape-close.png";
import { ReactNode, useState } from "react";

interface AccordionProps {
    accordion: {
        id: string;
        title: string;
        content: ReactNode | string;
    };
}

function Accordion({ accordion }: AccordionProps) {
    const [accordionShape, setAccordionShape] = useState<string>(AccordionShapeOpen);

    const toggleAccordion = () => {
        if (accordionShape === AccordionShapeOpen) {
            setAccordionShape(AccordionShapeClose);
        } else {
            setAccordionShape(AccordionShapeOpen);
        }
    };

    return (
        <div className="accordion d-flex flex-column">
            <button onClick={toggleAccordion} className="btn border border-0 text-primary position-relative text-center" type="button" data-bs-toggle="collapse" data-bs-target={`#${accordion.id}`}>
                <img src={accordionShape} style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))" }} className="img-fluid" alt="Accordion Shape" />
                <div className="position-absolute top-50 start-50 translate-middle text-white text-nowrap">
                    <p>{accordion.title}</p>
                </div>
            </button>
            <div id={accordion.id} className="collapse show px-4">
                {accordion.content}
            </div>
        </div>
    );
}

export default Accordion;
