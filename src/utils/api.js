import {API_KEY} from '../../API_KEY.js';

let map;

export const loadMap = (coordinates) => new Promise((resolve, reject) => {
  let options = {
    center: coordinates,
    zoom: 18,
  }
  map = new google.maps.Map(document.getElementById('map'), options);
  return map;
});

export const searchMaps = (text, location) => new Promise((resolve, reject) => {
  if (text === '') {
    return resolve([]);
  }
  const Library = new google.maps.places.PlacesService(map);

  const request = {
    keyword: text,
    location,
    radius: 20000
  }
  Library.nearbySearch(request, (response) => {
    resolve(response);
    console.log(response);
    console.log(response[0].geometry.location.lat());
    console.log(response[0].geometry.location.lng());
  });
});

export const createMarker = (coordinates, name) => new Promise((resolve, reject) => {
  return new google.maps.Marker({
    position: coordinates,
    map: map,
    title: name
  })
})






