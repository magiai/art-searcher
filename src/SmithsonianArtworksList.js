import React, { useState } from "react";
import FigureDisplay from "./figureDisplay";
import MuseumSectionDisplay from "./MuseumSectionDisplay";

export default function SmithsonianArtworksList(props) {
  const imagesList = [];

  for (let index = 0; index < props.artworks.length; index++) {

      const imageIndex = index;
      const imageTitle = props.artworks[index][props.title];

      if (props.artworks[index].content.descriptiveNonRepeating.online_media) {
          const imageURL = props.artworks[index].content.descriptiveNonRepeating.online_media.media[0].content + '_screen';

          imagesList.push(
              <FigureDisplay
                  key={imageIndex}
                  imageSrc={imageURL}
                  imageTitle={imageTitle === '' ? "Untitled" : imageTitle}
                  artist={
                    props.artworks[index].content.freetext.name ? props.artworks[index].content.freetext.name[0].content : "Unknown"
                  }
                  loading={imageIndex && props.isOpen === true < 7 ? "eager" : "lazy"}
              />
          );
      }
  }

  return (
      <MuseumSectionDisplay museumName={props.sectionTitle} images={imagesList} isOpen={props.isOpen}/>
  )
}