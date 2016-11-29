import {API_KEY} from '../../API_KEY.js';
const libraryLink = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;


export const initMap = () => {
  let options = {
    center: {
      lat: 37.7749,
      lng:-122.4194,
    },
    zoom: 12,
  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  console.log(map);
}

export const getPlace = (text) => {
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




