import React from "react";
import FigureDisplay from "./figureDisplay";
import { apiGeneralInformationForInstitutons } from "./apiInformationForInstitutons";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworksList(props) {

    const imagesList = [];
    let sectionTitle, 
        keyWordForImageTitle, 
        keyWordForArtist, 
        imageUrl,
        keyWordForIdentifier = '';
    let imageTitle, 
        artist, 
        imagePath, 
        identifier = '';
    let isOpen = false;
    let imageId = null;
    const apiGeneralInformationArray = Object.values(apiGeneralInformationForInstitutons);

    // console.log(apiGeneralInformationForInstitutons);

    keyWordForImageTitle = apiGeneralInformationArray[0].artworkTitle;
    keyWordForArtist = apiGeneralInformationArray[0].artist;
    imageUrl = apiGeneralInformationArray[0].imagesUrl;
    keyWordForIdentifier = apiGeneralInformationArray[0].identifier; 
    sectionTitle = apiGeneralInformationArray[0].sectionTitle;
    isOpen = apiGeneralInformationArray[0].isOpen; 

    for (let index = 0; index < props.artworks.length; index++) {

      const artworks = props.artworks[index];

        if (artworks !== undefined) {

          imageTitle = artworks[keyWordForImageTitle];
          artist = artworks[keyWordForArtist];
          identifier = artworks[keyWordForIdentifier]; 

          if (identifier !== null) {
            imageId = props.artworks[index][`${identifier}`];
          }
          if (imageId !== null) {
            imagePath = `${imageUrl}${identifier}/full/843,/0/default.jpg`;
          } else {
            imagePath = imageUrl;
          }

          imagesList.push(
            <FigureDisplay
                key={index}
                imageSrc={imagePath}
                imageTitle={imageTitle === '' ? "Untitled" : imageTitle || ''}
                artist={artist === '_primaryMaker' ? artist.name : artist || ''}
                loading={props.isOpen === true && index< 7 ? "eager" : "lazy"}
            />
          );
        }
      }

      return (
        <MuseumSectionDisplay 
          museumName={sectionTitle} 
          images={imagesList} 
          isOpen={isOpen}
        />
    )
}