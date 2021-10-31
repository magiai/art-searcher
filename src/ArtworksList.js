import React from "react";
import FigureDisplay from "./figureDisplay";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworksList(props) {

    const imagesList = [];

    for (let index = 0; index < props.artworks.length; index++) {
        const artworkId = props.identifier;
        const imageId = props.artworks[index][`${artworkId}`];
        const imageTitle = props.artworks[index][props.title];
        const artist = props.artworks[index][props.artist];
        const imageIndex = index;

        if (imageId !== null) {
            const imageURL = `${props.institutionURL}${imageId}/full/843,/0/default.jpg`;

            imagesList.push(
                <FigureDisplay
                    key={imageIndex}
                    imageSrc={imageURL}
                    imageTitle={imageTitle === '' ? "Untitled" : imageTitle}
                    artist={props.artist === '_primaryMaker' ? artist.name : artist}
                    loading={imageIndex && props.isOpen === true < 7 ? "eager" : "lazy"}
                />
            );
        }
    }

    return (
        <MuseumSectionDisplay museumName={props.sectionTitle} images={imagesList} isOpen={props.isOpen}/>
    )
}