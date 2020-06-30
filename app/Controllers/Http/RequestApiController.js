'use strict'
const axios = require('axios');

class RequestApiController {
  async searchAnime({ request }) {
    const data = request.only(['name_anime', 'page']);
    
    function getLink(name, page) {
      return axios({
        url: `https://api.jikan.moe/v3/search/anime?q=${name}&page=${page}`,
        method: "get",
      }).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return error;
      });
    }
   return await getLink(data.name_anime, data.page);
  }
  
  
  async detailAnime( {request} ) {
    const data = request.only(['id'])
    
    function getLink(id) {
      return axios({
        url: `https://api.jikan.moe/v3/anime/${id}`,
        method: "get",
      }).then(function (response) {
        return response.data;
      }).catch(function (error) {
        return error;
      });
    }
   return await getLink(data.id);
  }
  
}

module.exports = RequestApiController
