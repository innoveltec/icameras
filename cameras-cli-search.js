const fs = require('fs');
const _ = require('lodash');

const searchParam = process.argv.slice(2);
const searchTerm = searchParam.join(' ');

fs.readFile('./cameras.json', (err, data) => {
  if (err) console.log(err);
  else {
    const camerasData = JSON.parse(data);
    const cameras = camerasData.cameras;
    const filteredCameras = cameras.filter((camera) => {
      const cameraName = camera.Camera;
      return cameraName.indexOf(searchTerm) !== -1;
    });
    const output = filteredCameras.map((filteredCamera) => {
      const camerasAsStringArray = _.values(filteredCamera);
      return camerasAsStringArray.join(' | ');
    });
    console.log(output.join('\n'));
  }
});
