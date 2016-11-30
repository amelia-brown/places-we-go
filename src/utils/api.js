let map;

export const loadMap = (options) => new Promise((resolve, reject) => {
  try {
  let settings = {
    center: options.coordinates,
    zoom: 18,
    disableDefaultUI: true
  }
  map = new google.maps.Map(document.getElementById('map'), settings);
  createMarker(options.coordinates);
  return resolve(options);
  } catch (err) {
    reject(err)
  }
});

export const searchMaps = (text, location) => new Promise((resolve, reject) => {
  if (text === '') {
    return resolve([]);
  }
  const Library = new google.maps.places.PlacesService(map);

  const request = {
    keyword: text,
    location,
    radius: 200000
  }
  try {
    Library.nearbySearch(request, (response) => {
      return resolve(response);
    });
  }
  catch(e) {
    reject(e);
  }
});

export const createMarker = (coordinates, name) => new Promise((resolve, reject) => {
  try {
    let marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: name
    })
    return resolve(marker)
  }
  catch(e) {
    reject(e);
  }
});

export const loadMarkers = (markers) => {
  return Promise.all(markers.map(item => {
    createMarker(item.coordinates, item.name)
  }))
}
