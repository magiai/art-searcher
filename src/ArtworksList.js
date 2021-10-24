import React from "react";
import FigureDisplay from "./figureDisplay";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworksList(props) {

    const imagesList = [];

    for (let index = 0; index < props.artworks.length; index++) {
        const artworkId = props.identifier;
        const imageId = props.artworks[index][`${artworkId}`];

        const title = props.title;
        const imageTitle = props.artworks[index].title;
        const imageIndex = index;

        if (imageId !== null) {
            const imageURL = `${props.institutionURL}${imageId}/full/!800,800/0/default.jpg`;

            imagesList.push(
                <FigureDisplay
                    key={imageIndex}
                    imageSrc={imageURL}
                    imageTitle={imageTitle === '' ? "Untitled" : imageTitle}
                    loading={imageIndex < 7 ? "eager" : "lazy"}
                />
            );
        }
    }

    return (
        <MuseumSectionDisplay museumName={props.sectionTitle} images={imagesList} isOpen={props.isOpen}/>
    )
}