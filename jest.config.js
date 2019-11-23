const path = require('path');

module.exports = {
  setupFiles: [path.join(__dirname, '/src/jestSetup.js')],
  setupFilesAfterEnv: [path.join(__dirname, '/src/jestStyledComponentsSetup.js')],
  snapshotSerializers: ['enzyme-to-json/serializer']
}