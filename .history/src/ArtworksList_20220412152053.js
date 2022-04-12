import React from "react";
import FigureDisplay from "./figureDisplay";
import { apiGeneralInformationForInstitutons } from "./apiInformationForInstitutons";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworksList(props) {

    const imagesList = [];
    let keyWordForSectionTitle, 
        keyWordForImageTitle, 
        keyWordForArtist, 
        imageUrl,
        keyWordForIdentifier = '';
    let sectionTitle, 
        imageTitle, 
        artist, 
        imagePath, 
        identifier = '';
    let isOpen = false;
    let imageId = null;
    const apiGeneralInformationArray = Object.values(apiGeneralInformationForInstitutons);
    console.log(apiGeneralInformationArray);

    keyWordForImageTitle = apiGeneralInformationArray[0].artworkTitle;
    keyWordForArtist = apiGeneralInformationArray[0].artist;
    imageUrl = apiGeneralInformationArray[0].imagesUrl;
    keyWordForIdentifier = apiGeneralInformationArray[0].identifier; 
    keyWordForSectionTitle = apiGeneralInformationArray[0].sectionTitle;
    isOpen = apiGeneralInformationArray[0].isOpen; 

    // console.log(apiGeneralInformationArray[0]);
    // console.log(keyWordForImageTitle, keyWordForArtist, keyWordForImageUrl, keyWordForIdentifier, keyWordForSectionTitle, isOpen);


    for (let index = 0; index < props.artworks.length; index++) {

      const artworks = props.artworks[index];
    //   console.log(artworks);

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

          // console.log(imagePath);
          
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
   
        // const imageTitle = props.artworks[index][props.title];
        // const artist = props.artworks[index][props.artist];

        // if (imageId !== null) {
            // const imageURL = `${props.institutionURL}${imageId}/full/843,/0/default.jpg`;
            // const imageURL = `${imagesUrl}${imageId}/full/843,/0/default.jpg`;


  
        // }
      }

      return (
        <MuseumSectionDisplay 
          museumName={sectionTitle} 
          images={imagesList} 
          isOpen={isOpen}
        />
    )
}