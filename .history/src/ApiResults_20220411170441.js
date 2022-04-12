import React, { useState } from "react";
import UseFetch from "./fetchData";
import ArtworksList from "./ArtworksList";
// import SmithsonianArtworksList from "./SmithsonianArtworksList";
import { apiUrlInformationForInstitutons } from "./apiInformationForInstitutons";
// import ArtworkMetMuseum from "./MetMuseumObjectsList";

export default function ApiResults(props) {

  // let tryIt = {};
  const [returnedArtworks, setReturnedArtworks] = useState({});

  // const updateResult = (tryIt = {}) => {
  //     const { value } = tryIt;

  //     setReturnedArtworks((prevArtworks) => ({
  //         ...prevArtworks,
  //         tryIt
  //     }));
  // };

  console.log(returnedArtworks);

  // const submitPhrase = (event) => {
  //     event.preventDefault();
  // };

  const apiUrlInformationForInstitutonsArray = Object.values(apiUrlInformationForInstitutons);
  let artworks;

  // console.log(apiUrlInformationForInstitutonsArray);

  for (let index = 0; index < apiUrlInformationForInstitutonsArray.length; index++) {

    const urlStart = apiUrlInformationForInstitutonsArray[index].urlStart;
    const urlEnd = apiUrlInformationForInstitutonsArray[index].urlEnd;
    const mainURL = urlStart + props.searchedSubject + urlEnd;
    const initialResponseName = apiUrlInformationForInstitutonsArray[index].responseName;
    const secondParameter = apiUrlInformationForInstitutonsArray[index].secondResponseParameter;

    if (secondParameter === null) {
      console.log(initialResponseName);
      const initialData = UseFetch(mainURL, {initialResponseName: []});
      console.log(initialData);
      initialData !== undefined ? artworks = initialData.initialResponseName : artworks = '';
      updateResult(artworks);
      setReturnedArtworks(artworks);
    } 

    else {
      const initialData = UseFetch(mainURL, {initialResponseName: {secondParameter: []}});
      const firstResponse = initialData[initialResponseName];

      if (firstResponse !== undefined) {
        artworks = initialData[initialResponseName][secondParameter];
        setReturnedArtworks(artworks);
        // updateResult(artworks);
        // console.log('halo2');
      }
    }
  }

  return (
    <ArtworksList
      //  key = {index} 
       artworks = {returnedArtworks || ''}
   />
  )
}