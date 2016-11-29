import {API_KEY} from '../../API_KEY.js';
const libraryLink = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;


export const loadMap = (coordinates) => new Promise((resolve, reject) => {
  let options = {
    center: coordinates,
    zoom: 12,
  }
  let map = new google.maps.Map(document.getElementById('map'), options);
})

export const searchMaps = (text) => {
  const Library = new google.maps.places.PlacesService(map);
  const request = {
    query: text,
  }
  Library.textSearch(request, (response) => {
    console.log(response);
    console.log(response[0].geometry.location.lat());
    console.log(response[0].geometry.location.lng());
  });
}




