import axios from "axios";


const BASEURL = "https://randomuser.me/api/";
const APIKEY = "?key=KKFD-9PGG-9BRT-VLIB";
const QUANTITIES = "&results=25";
const SEED = "&seed=huskiesarecute";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {

    // console.log(dataFromAPI);
    return axios.get(BASEURL + APIKEY + QUANTITIES + SEED + query);
  }
};
