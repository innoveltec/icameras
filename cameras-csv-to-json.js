const csv = require('csvtojson');
const fs = require('fs');

csv({ delimiter: ';' })
  .fromFile('cameras-defb.csv')
  .then((cameras) => {
    const filteredCameras = cameras
      .filter((camera) => camera.Latitude)
      .map((filteredCamera) => {
        const cameraNumber = filteredCamera.Camera.substr(7, 3);
        return { Number: cameraNumber, ...filteredCamera };
      });
    const camerasToJson = {
      cameras: filteredCameras,
    };
    console.log(filteredCameras.length);
    fs.writeFile('cameras.json', JSON.stringify(camerasToJson), (err) => {
      if (err) {
        throw err;
      }
      console.log('JSON array is saved.');
    });
  })
  .catch((err) => {
    console.log(err);
  });
