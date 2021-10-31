import React, { useState, useEffect } from "react";
import UseFetch from "./fetchData";
import ArtworksList from "./ArtworksList";
import SmithsonianArtworksList from "./SmithsonianArtworksList";
// import ArtworkMetMuseum from "./MetMuseumObjectsList";

export default function ApiResults(props) {
  // const [smithsonInstitutionArtworksData, setSmithsonInstitutionArtworksData] = useState([])

    const smithsonianInstitutionArtDesignURL = `https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=${props.searchedSubject}&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=100`;
    const initialDataSmithsoniannInstitutionArtDesign = UseFetch(smithsonianInstitutionArtDesignURL, {response: {rows: []}});
    const artworksDataSmithsonianInstitutionArtDesign = initialDataSmithsoniannInstitutionArtDesign.response.rows;

    // const smithsonianInstitutionHistoryCultureURL = `https://api.si.edu/openaccess/api/v1.0/category/history_culture/search?q=${props.searchedSubject}&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=20`;
    // const initialDataSmithsonianInstitutionHistoryCulture = UseFetch(smithsonianInstitutionHistoryCultureURL, {response: {rows: []}});
    // const artworksDataSmithsonianInstitutionHistoryCulture = initialDataSmithsonianInstitutionHistoryCulture.response.rows;
  
    const artInstituteOfChicagoURL = `https://api.artic.edu/api/v1/artworks/search?q=${props.searchedSubject}&limit=70&fields=id,title,image_id,color,artist_title`;
    const initialDatArtInstituteOfChicago = UseFetch(artInstituteOfChicagoURL, {data:[]});
    const artworksDataArtInstituteOfChicago = initialDatArtInstituteOfChicago.data;

    const albertAndVictoriaMuseumURL = `https://api.vam.ac.uk/v2/objects/search?q=${props.searchedSubject}`;
    const initialDataAlbertAndVictoriaMuseum = UseFetch(albertAndVictoriaMuseumURL, {records:[]}); // make sure passing an empty array to default data if it fails
    const artworksDataAlbertAndVictoriaMuseum = initialDataAlbertAndVictoriaMuseum.records;

    // const bookCoversURL = `https://covers.openlibrary.org/b/isbn/cat-m.jpg`;
    // console.log(bookCoversURL);

    // const metmuseumURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?&q=${searchedSubject.subject}?tags=true`;
    // const initialDataMetMuseum = UseFetch(metmuseumURL, {objectIDs:[]}); // make sure passing an empty array to default data if it fails
    // const artworksDataMetMuseum = initialDataMetMuseum.objectIDs;
    // const artworkMetMuseumIds = artworksDataMetMuseum.map((artId, index) => (
    //     {artId}
    // ));

    // useEffect(() => {
    //   fetch(smithsonianInstitutionURL).then(
    //     response => response.json()
    //   ).then(
    //     data => setSmithsonInstitutionArtworksData(data.response.rows)
    //   )
    // }, []);

    return (
        <React.Fragment>
            <ArtworksList
                artworks = {artworksDataAlbertAndVictoriaMuseum}
                identifier = {'_primaryImageId'}
                title = {'_primaryTitle'}
                artist = {'_primaryMaker'}
                color ={''}
                institutionURL={'https://framemark.vam.ac.uk/collections/'}
                sectionTitle = {"Albert and Victoria Museum"}
                isOpen={true}
            />
            <ArtworksList
                artworks = {artworksDataArtInstituteOfChicago}
                identifier = {'image_id'}
                title = {'title'}
                artist = {'artist_title'}
                color = {'color'}
                institutionURL={'https://www.artic.edu/iiif/2/'}
                sectionTitle = {"Art Institute of Chicago"}
            />
            <SmithsonianArtworksList
                artworks = {artworksDataSmithsonianInstitutionArtDesign}
                title = {'title'}
                sectionTitle = {"Smithsonian Institute - Art Design"}
            />

            {/* <SmithsonianArtworksList
                artworks = {artworksDataSmithsonianInstitutionHistoryCulture}
                title = {'title'}
                sectionTitle = {"Smithsonian Institute - History Culture"}
            /> */}
            {/*<ArtworkMetMuseum*/}
            {/*    artworks = {artworkMetMuseumIds}*/}
            {/*/>*/}
        </React.Fragment>
    )
}