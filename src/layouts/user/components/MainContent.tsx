import { ReactNode } from "react";

interface ChildrenProps {
    children: ReactNode;
}

function MainContent({ children }: ChildrenProps) {
    return <div className="col-12 col-lg-6 order-1 order-lg-2 px-3">{children}</div>;
}

export default MainContent;
