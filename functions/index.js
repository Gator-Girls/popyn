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
        let place = data.results[0];
        response.status(200).send(place);
      }
    } catch (error) {
      console.log(error);
      response.status(500).send();
    }
  });
});

// exports.findLocationsNearby = functions.https.onRequest((request, response) => {
//   cors(request, response, async () => {
//     try {
//       let latlngLocation = encodeURI(request.body.latlng);
//       console.log(latlngLocation);
//       let { data } = await axios.get(
//         "https://maps.googleapis.com/maps/api/geocode/json?latlng=29.652,-82.345&key=AIzaSyBX343Nmh74V7B37a98q1pbtkqYfVt77XI"
//       );
//       if (data.error_message) {
//         response.status(200).send("No Results");
//       } else {
//         let place = data.results[0];
//         response.status(200).send(place);
//       }
//     } catch (error) {
//       console.log(error);
//       response.status(500).send();
//     }
//   });
// });
