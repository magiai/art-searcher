import { React, useState } from "react";
import UseFetch from "./fetchData";
import ArtworksList from "./ArtworksList";
// import SmithsonianArtworksList from "./SmithsonianArtworksList";
import { apiUrlInformationForInstitutons } from "./apiInformationForInstitutons";
// import ArtworkMetMuseum from "./MetMuseumObjectsList";

export default function ApiResults(props) {
  // console.log(props)

  // let tryIt = {};
  const [returnedArtworks, setReturnedArtworks] = useState({});

  // const updateResult = (tryIt = {}) => {
  //     const { value } = tryIt;

  //     setReturnedArtworks((prevArtworks) => ({
  //         ...prevArtworks,
  //         tryIt
  //     }));
  // };

  // console.log(returnedArtworks);

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
      // console.log(mainURL);
      // console.log(initialResponseName);
      const initialData = UseFetch(mainURL, {data: []});
      // console.log(initialData);
      initialData !== undefined ? artworks = initialData.data : artworks = '';
      console.log(artworks);
      // updateResult(artworks);
      setReturnedArtworks(artworks);
      // console.log(returnedArtworks);
    } 

    else {
      const initialData = UseFetch(mainURL, {initialResponseName: {secondParameter: []}});
      const firstResponse = initialData[initialResponseName];

      if (firstResponse !== undefined) {
        // artworks = initialData[initialResponseName][secondParameter];
        // setReturnedArtworks(artworks);
        // updateResult(artworks);
        // console.log('halo2');
      }
    }
  }

  return (
    // <h1>Halko</h1>
    <ArtworksList
      //  key = {index} 
       artworks = {returnedArtworks || ''}
   />
  )
}