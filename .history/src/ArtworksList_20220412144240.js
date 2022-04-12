import React from "react";
import FigureDisplay from "./figureDisplay";
import { apiGeneralInformationForInstitutons } from "./apiInformationForInstitutons";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworksList(props) {

    const imagesList = [];
    let keyWordForSectionTitle, 
        keyWordForImageTitle, 
        keyWordForArtist, 
        keyWordForImageUrl,
        keyWordForIsOpen = false, 
        keyWordForIdentifier = '';
    let sectionTitle, 
        imageTitle, 
        artist, 
        imageUrl, 
        imagePath, 
        identifier = '';
    let isOpen = false;
    let imageId = null;
    const apiGeneralInformationArray = Object.values(apiGeneralInformationForInstitutons);

    keyWordForImageTitle = apiGeneralInformationArray[0].artworkTitle;
    keyWordForArtist = apiGeneralInformationArray[0].artist;
    keyWordForImageUrl = apiGeneralInformationArray[0].imagesUrl;
    keyWordForIdentifier = apiGeneralInformationArray[0].identifier; 
    keyWordForSectionTitle = apiGeneralInformationArray[0].sectionTitle;
    keyWordForIsOpen = apiGeneralInformationArray[0].isOpen; 

    console.log(apiGeneralInformationArray[0]);
    console.log(imageTitle, artist, imageUrl, identifier, sectionTitle, isOpen);


    for (let index = 0; index < props.artworks.length; index++) {

      const artworks = props.artworks[index];
      // console.log(artworks);
        // const artworkId = props.identifier;

        if (artworks !== undefined) {
          // console.log(apiGeneralInformationArray[index].artworkTitle);

          // imageTitle = artworks[apiGeneralInformationArray[index].artworkTitle];
          // artist = artworks[apiGeneralInformationArray[index].artist];
          // imageUrl = apiGeneralInformationArray[index].imagesUrl;
          // identifier = apiGeneralInformationArray[index].identifier; 
          // sectionTitle = apiGeneralInformationArray[index].sectionTitle;
          // isOpen = apiGeneralInformationArray[index].isOpen; 

          if (identifier !== null) {
            imageId = props.artworks[index][`${identifier}`];
          }
          if (imageId !== null) {
            imagePath = `${imageUrl}${imageId}/full/843,/0/default.jpg`;
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