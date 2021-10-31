import React from "react";

export default function FigureDisplay(props) {

    return(
        <figure>
            <img
                src={props.imageSrc}
                alt={props.imageTitle}
                loading={props.loading}
                height="300"
                width="300"
            />
            <figcaption className="title">
                <i>{props.imageTitle}</i>, {props.artist}
            </figcaption>
        </figure>
    )
}