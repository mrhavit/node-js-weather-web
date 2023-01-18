const request = require("request");

const forecast = (longitude, latitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=7fa05fe9e18bf3ef36e064bdd63d0793&query=" +
    encodeURIComponent(latitude) +
    "," +
    encodeURIComponent(longitude) +
    "&units=f";
  //   console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". Its is currently " +
          body.current.temperature +
          " degress out. Its feels like " +
          body.current.feelslike +
          " degress out."
      );
    }
  });
};

module.exports = forecast;
