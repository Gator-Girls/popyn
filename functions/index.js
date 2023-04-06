const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });

exports.findExactLocation = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      let latlngLocation = encodeURI(request.body.latlng);
      functions.logger.log("latlngLocation:", latlngLocation);
      // console.log(latlngLocation);
      //console.log(this.$route.query.latlng);
      let { data } = await axios.get(
        "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          latlngLocation +
          "&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
      );
      if (data.error_message) {
        response.status(200).send("No Results");
      } else {
        let placeResult = data.results[0];
        // let imageUrl = null;
        // if (placeResult.photos && placeResult.photos.length > 0) {
        //   let photo = placeResult.photos[0];
        //   imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=YOUR_GOOGLE_PLACES_API_KEY`;
        //   // Now you can use the imageUrl to display the image in your application
        // }
        // const placeObj = {
        //   id: placeResult.place_id,
        //   address: placeResult.vicinity,
        //   imageSrc: imageUrl,

        // };
        response.status(200).send(placeResult);
      }
    } catch (error) {
      console.log(error);
      response.status(500).send();
    }
  });
});

exports.findNearbyBars = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      let latlngLocation = encodeURI(request.body.latlng);
      functions.logger.log("latlngLocation:", latlngLocation);
      let { data } = await axios.get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          latlngLocation +
          "&radius=10000&type=bar&rankby=prominence&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
      );
      if (data.error_message) {
        response.status(200).send("No Results");
      } else {
        let places = data.results;
        let placeObj = [];
        let placesAllObjs = [];
        for (var i = 0; i < places.length; i++) {
          // Get the first photo reference for the place
          let photoRef = places[i].photos
            ? places[i].photos[0].photo_reference
            : null;

          // Construct the URL of the photo
          let imageUrl = photoRef
            ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoRef}&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI`
            : null;

          placeObj = {
            id: places[i].place_id,
            name: places[i].name,
            address: places[i].vicinity,
            types: places[i].types,
            imageSrc: imageUrl,
            rating: places[i].rating,
          };
          placesAllObjs.push(placeObj);
          placeObj = [];
        }
        response.status(200).send(placesAllObjs);
      }
    } catch (error) {
      console.log(error);
      response.status(500).send();
    }
  });
});

exports.findNearbyClubs = functions.https.onRequest((request, response) => {
  cors(request, response, async () => {
    try {
      let latlngLocation = encodeURI(request.body.latlng);
      functions.logger.log("latlngLocation:", latlngLocation);

      let { data } = await axios.get(
        "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
          latlngLocation +
          "&radius=10000&type=night_club&rankby=prominence&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
      );
      if (data.error_message) {
        response.status(200).send("No Results");
      } else {
        let places = data.results;
        let placeObj = [];
        let placesAllObjs = [];
        for (var i = 0; i < places.length; i++) {
          let imageUrl = null;
          if (places[i].photos && places[i].photos.length > 0) {
            let photo = places[i].photos[0];
            imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photo.photo_reference}&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI`;
          }
          placeObj = {
            id: places[i].place_id,
            name: places[i].name,
            address: places[i].vicinity,
            imageSrc: imageUrl,
            types: places[i].types,
            rating: places[i].rating,
          };
          placesAllObjs.push(placeObj);
          placeObj = [];
        }
        response.status(200).send(placesAllObjs);
      }
    } catch (error) {
      console.log(error);
      response.status(500).send();
    }
  });
});
