const path = require('path');
// import x from './node_modules/@tcp'
// react-native >= 0.57

const extraNodeModules = {
  '@tcp': path.resolve(__dirname + '/node_modules/@tcp/'),
};
const watchFolders = [
  path.resolve(__dirname + '/node_modules/@tcp/')
];

module.exports = {
  resolver: {
    extraNodeModules,
  },
  watchFolders
};