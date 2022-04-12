import { useState, useEffect } from "react";
// export const breeds = {breedsData};

export default function UseFetch(url, defaultData) {
    const [data, updateData] = useState(defaultData);

    

    // NOTE! Don't pass url as an argument in the child method
    // this seems to break the React observable
    const getDataFromAPI = async function () {
        try {
            if (!url) {
                updateData(defaultData);
                return;
            }
            const response = await fetch(url);
            const json = await response.json();
            updateData(json);
        } catch(event) {
            console.log(event);
        }
    }

  //   useEffect((getUserDetail = getUserDetail) => {
  //     getUserDetail();
  //  }, []);

    // also don't call the URL argument on useEffect either
    useEffect((getDataFromAPI = getDataFromAPI) => {

    getDataFromAPI();

    }, [url]);

    return data;
} // end useFetch