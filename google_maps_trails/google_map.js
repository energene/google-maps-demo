//var zoom = 8;
var zoom = 8;
var latitude = 47.618047;
var longitude = -122.351344;

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoom,
    center: {lat: latitude, lng: longitude},

    // mapTypeId: google.maps.MapTypeId.TERRAIN
    mapTypeId: google.maps.MapTypeId.ROADMAP
    // mapTypeId: google.maps.MapTypeId.HYBRID
  });

// Adds markers to the map, function defined below.
  setMarkers(map);

  //Place circle on map
  var drivingRadius = new google.maps.Circle({
    center: {lat: latitude, lng: longitude},
    radius:80450, // in meters, equals 50 miles
    strokeColor:"#000000",
    strokeOpacity:0.5,
    strokeWeight:2,
    fillColor:"#BADA55",
    fillOpacity:0.2
  });
  drivingRadius.setMap(map);
}

// Data for the trail markers consist of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.

var trails = [

  ['Code Fellows', 47.618047, -122.351344, 1],
  ['Stately Troy Manor', 47.547284, -122.389856, 2],
  ['Rattlesnake Ledge', 47.435545, -121.771740, 3],
  ['Wallace Falls', 47.867065, -121.678380, 4],
  ['Bridal Veil Falls', 47.809015, -121.573967, 5]
];

function setMarkers(map) {
// Marker sizes are expressed as a Size of X,Y where the origin of the image
// (0,0) is located in the top left of the image.

// Origins, anchor positions and coordinates of the marker increase in the X
// direction to the right and in the Y direction down.

  var image = {
    url: './smallPikachu.gif',
    // This marker is 50 pixels wide by 50 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base at (0, 50).
    anchor: new google.maps.Point(0, 50)
  };

  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  var shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  for (var i = 0; i < trails.length; i++) {
    var trail = trails[i];
    var marker = new google.maps.Marker({
      draggable: true,
      animation: google.maps.Animation.DROP,
      position: {lat: trail[1], lng: trail[2]},
      map: map,
      icon: image,
      shape: shape,
      title: trail[0],
      zIndex: trail[3],
    });
  }
}
