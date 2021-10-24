// // import logo from './logo.svg';
import React from "react";
import UseFetch from "./breeds";
import ArtworksList from "./ArtworksList";
// import ArtworkMetMuseum from "./MetMuseumObjectsList";
import './App.css';

export default function App(props) {

    // showSearchResult() {
    //
    // }
    //
    const searchedSubject = "owl";

    // <input className="input--search" value={searchedSubject} type="search" onChange={showSearchResult} />

    const albertAndVictoriaMuseumURL = `https://api.vam.ac.uk/v2/objects/search?q=${searchedSubject}`;
    const initialDataAlbertAndVictoriaMuseum = UseFetch(albertAndVictoriaMuseumURL, {records:[]}); // make sure passing an empty array to default data if it fails
    const artworksDataAlbertAndVictoriaMuseum = initialDataAlbertAndVictoriaMuseum.records;

    const artInstituteOfChicagoURL = `https://api.artic.edu/api/v1/artworks/search?q=${searchedSubject}&limit=70&fields=id,title,image_id`;
    const initialDatArtInstituteOfChicago = UseFetch(artInstituteOfChicagoURL, {data:[]});
    const artworksDataArtInstituteOfChicago = initialDatArtInstituteOfChicago.data;

    // const metmuseumURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?&q=${searchedSubject}?tags=true`;
    // const initialDataMetMuseum = UseFetch(metmuseumURL, {objectIDs:[]}); // make sure passing an empty array to default data if it fails
    // const artworksDataMetMuseum = initialDataMetMuseum.objectIDs;
    // const artworkMetMuseumIds = artworksDataMetMuseum.map((artId, index) => (
    //     {artId}
    // ));

    return (
        <React.Fragment>
            <h1>Search artworks by subject</h1>
            <ArtworksList
                artworks = {artworksDataAlbertAndVictoriaMuseum}
                identifier = {'_primaryImageId'}
                title = {'_primaryTitle'}
                institutionURL={'https://framemark.vam.ac.uk/collections/'}
                sectionTitle = {"Albert and Victoria Museum"}
                isOpen={true}
            />
            <ArtworksList
                artworks = {artworksDataArtInstituteOfChicago}
                identifier = {'image_id'}
                title = {'title'}
                institutionURL={'https://www.artic.edu/iiif/2/'}
                sectionTitle = {"Art Institute of Chicago"}
            />
            {/*<ArtworkMetMuseum artworks={artworkMetMuseumIds} />*/}
        </React.Fragment>
    )
} // App
//
