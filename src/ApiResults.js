import React from "react";
import UseFetch from "./breeds";
import ArtworksList from "./ArtworksList";
import ArtworkMetMuseum from "./MetMuseumObjectsList";

export default function ApiResults(props) {

    const albertAndVictoriaMuseumURL = `https://api.vam.ac.uk/v2/objects/search?q=${props.searchedSubject}`;
    const initialDataAlbertAndVictoriaMuseum = UseFetch(albertAndVictoriaMuseumURL, {records:[]}); // make sure passing an empty array to default data if it fails
    const artworksDataAlbertAndVictoriaMuseum = initialDataAlbertAndVictoriaMuseum.records;

    const artInstituteOfChicagoURL = `https://api.artic.edu/api/v1/artworks/search?q=${props.searchedSubject}&limit=70&fields=id,title,image_id,color,artist_title`;
    const initialDatArtInstituteOfChicago = UseFetch(artInstituteOfChicagoURL, {data:[]});
    const artworksDataArtInstituteOfChicago = initialDatArtInstituteOfChicago.data;

    // const metmuseumURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?&q=${searchedSubject.subject}?tags=true`;
    // const initialDataMetMuseum = UseFetch(metmuseumURL, {objectIDs:[]}); // make sure passing an empty array to default data if it fails
    // const artworksDataMetMuseum = initialDataMetMuseum.objectIDs;
    // const artworkMetMuseumIds = artworksDataMetMuseum.map((artId, index) => (
    //     {artId}
    // ));

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
            {/*<ArtworkMetMuseum*/}
            {/*    artworks = {artworkMetMuseumIds}*/}
            {/*/>*/}
        </React.Fragment>
    )
}