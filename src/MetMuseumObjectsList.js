import React from "react";
import UseFetch from "./fetchData";
import FigureDisplay from "./figureDisplay";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworkMetMuseum(props) {

    const imagesList = [];

    for (let index = 0; index < props.artworks.length; index++) {
        const objectId = props.artworks[index].artId;
        const subjectURL = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`;
        const initialObjectData = UseFetch(subjectURL, {});
        const subjectImage = initialObjectData.primaryImageSmall;
        const subjectTitle = initialObjectData.title;
        const imageIndex = index;

        imagesList.push(
            <FigureDisplay
                key={imageIndex}
                imageSrc={subjectImage}
                imageTitle={subjectTitle}
                loading={imageIndex < 10 ? "eager" : "lazy"}
            />
        );
    }

    return (
        <MuseumSectionDisplay museumName={"Met Museum"} images={imagesList}/>
    )
}