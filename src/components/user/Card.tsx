import { ReactNode } from "react";

// Define the type for the card prop
interface CardProps {
    card?: {
        title: string;
        content: ReactNode;
    };
}

function Card({ card }: CardProps) {
    if (!card) {
        return <div>No Sample Card Content</div>;
    }

    return (
        <div className="card mb-3 text-center shadow bg-light-subtle border rounded-bottom-4">
            <div className="card-header bg-primary text-light fs-6 rounded-top-2">{card.title}</div>
            <div className="card-body">{card.content}</div>
        </div>
    );
}

export default Card;
