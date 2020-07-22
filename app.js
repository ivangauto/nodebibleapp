/* jshint esversion: 6 */


const biblia = require('./bibila/bibila');
const bibila = require('./bibila/bibila');

const argv = require('yargs').options({
    bible: {
        alias: 'd',
        desc: 'Id de la Biblia',
        demand: true
    }
}).argv;

console.log(argv.bible);


bibila.getBibilaInfo(argv.bible)
    .then(console.log);