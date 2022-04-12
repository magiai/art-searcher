export const apiUrlInformationForInstitutons = {

  // smithsonians: {
  //   'urlStart': 'https://api.si.edu/openaccess/api/v1.0/category/art_design/search?q=',
  //   'urlEnd': '&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=100',
  //   'responseName': 'response', 
  //   'secondResponseParameter': 'rows', 
  // },

  artInstituteOfChicago: {
    'urlStart': 'https://api.artic.edu/api/v1/artworks/search?q=',
    'urlEnd': '&limit=70&fields=id,title,image_id,color,artist_title',
    'responseName': 'data', 
    'secondResponseParameter': null, 
  },

  // albertAndVictoriaMuseum: {
  //   'urlStart': 'https://api.vam.ac.uk/v2/objects/search?q=$',
  //   'urlEnd': '',
  //   'responseName': 'records', 
  //   'secondResponseParameter': null, 
  // }

    // const smithsonianInstitutionHistoryCultureURL = `https://api.si.edu/openaccess/api/v1.0/category/history_culture/search?q=${props.searchedSubject}&api_key=h4EFHdtQ2Buaa56YASGozM68gzw1NFka61spYM44&rows=20`;
    // const initialDataSmithsonianInstitutionHistoryCulture = UseFetch(smithsonianInstitutionHistoryCultureURL, {response: {rows: []}});
    // const artworksDataSmithsonianInstitutionHistoryCulture = initialDataSmithsonianInstitutionHistoryCulture.response.rows;
  

    // const bookCoversURL = `https://covers.openlibrary.org/b/isbn/cat-m.jpg`;
    // console.log(bookCoversURL);

    // const metmuseumURL = `https://collectionapi.metmuseum.org/public/collection/v1/search?&q=${searchedSubject.subject}?tags=true`;
    // const initialDataMetMuseum = UseFetch(metmuseumURL, {objectIDs:[]}); // make sure passing an empty array to default data if it fails
    // const artworksDataMetMuseum = initialDataMetMuseum.objectIDs;
    // const artworkMetMuseumIds = artworksDataMetMuseum.map((artId, index) => (
    //     {artId}
    // ));
}

export const apiGeneralInformationForInstitutons = {

  smithsonians: {
    'identifier': null,
    'artworkTitle': 'title',
    'artist': "content.freetext.name ? props.artworks[index].content.freetext.name[0].content : 'Unknown'",
    'imagesUrl': "content.descriptiveNonRepeating.online_media.media[0].content + '_screen'",
    'sectionTitle': 'Smithsonian Institute - Art Design',
    'isOpen': false
  },

  artInstituteOfChicago: {
    'identifier': 'image_id',
    'artworkTitle': 'title',
    'artist': 'artist_title',
    'imagesUrl': 'https://www.artic.edu/iiif/2/',
    'sectionTitle': 'Art Institute of Chicago',
    'isOpen': false
  },

  albertAndVictoriaMuseum: {
    'identifier': '_primaryImageId',
    'artworkTitle': 'title',
    'artist': '_primaryMaker',
    'imagesUrl': 'https://framemark.vam.ac.uk/collections/',
    'sectionTitle': 'Albert and Victoria Museum',
    'isOpen': true
  }

}