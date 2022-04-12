import React from "react";
import FigureDisplay from "./figureDisplay";
import { apiGeneralInformationForInstitutons } from "./apiInformationForInstitutons";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function ArtworksList(props) {

    const imagesList = [];
    const apiGeneralInformationArray = Object.values(apiGeneralInformationForInstitutons);
    let sectionTitle, imageTitle, artist, imageUrl, imagePath, identifier = '';
    let isOpen = false;
    let imageId = null;

    for (let index = 0; index < props.artworks.length; index++) {

      const artworks = props.artworks[index];
        // const artworkId = props.identifier;
        console.log(artworks);

        if (artworks !== undefined) {
          console.log(apiGeneralInformationArray[index].artworkTitle);

          imageTitle = artworks[apiGeneralInformationArray[index].artworkTitle];
          artist = artworks[apiGeneralInformationArray[index].artist];
          imageUrl = apiGeneralInformationArray[index].imagesUrl;
          identifier = apiGeneralInformationArray[index].identifier; 
          sectionTitle = apiGeneralInformationArray[index].sectionTitle;
          isOpen = apiGeneralInformationArray[index].isOpen; 

          if (identifier !== null) {
            imageId = props.artworks[index][`${identifier}`];
          }
          if (imageId !== null) {
            imagePath = `${imageUrl}${imageId}/full/843,/0/default.jpg`;
          } else {
            imagePath = imageUrl;
          }

          console.log(imagePath);
          
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