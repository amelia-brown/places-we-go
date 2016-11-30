let map;

export const loadMap = (options) => new Promise((resolve, reject) => {
  let settings = {
    center: options.coordinates,
    zoom: 18,
  }
  map = new google.maps.Map(document.getElementById('map'), settings);
  createMarker(options.coordinates);
  return resolve(options);
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
//    console.log(response);
    return resolve(response);
  });
});

export const createMarker = (coordinates, name) => new Promise((resolve, reject) => {
  return new google.maps.Marker({
    position: coordinates,
    map: map,
    title: name
  })
})






