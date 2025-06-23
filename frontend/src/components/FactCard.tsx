import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import type FactType from "../types/factType";
import fallbackImageUrl from "../assets/images/generic-animal-placeholder.webp";

const FactCard = ({ fact }: { fact: FactType }) => {
    const fallbackImage = fallbackImageUrl;
    const [imgSrc, setImgSrc] = useState<string>(fact.media ?? fallbackImage);

    useEffect(() => {
        if (fact.media) {
            const img = new Image();
            img.src = fact.media;
            img.onload = () => setImgSrc(fact.media!);
            img.onerror = () => setImgSrc(fallbackImage);
        } else {
            setImgSrc(fallbackImage);
        }
    }, [fact.media]);

    return (
        <Card
            className="my-3 p-3 rounded"
            style={{ maxHeight: "300px" }}
        >
            <Link to={`/fact/${fact._id}`}>
                <Card.Img
                    src={imgSrc}
                    variant="top"
                    alt={fact.animal}
                    className="fact-image"
                />
            </Link>

            <Card.Body>
                <span>{fact.likes ? fact.likes.length : 0} likes</span>
                <Link to={`/fact/${fact._id}`}>
                    <Card.Title as="div">
                        <strong>{fact.animal}</strong>
                    </Card.Title>
                </Link>
            </Card.Body>

            <Card.Text
                as="p"
                className="text-truncate"
            >
                {fact.text}
            </Card.Text>
        </Card>
    );
};

export default FactCard;
