/* jshint esversion: 6 */
/* jshint esversion: 8 */
const axios = require('axios');



const getBibilaInfo = async(bible) => {

    const instance = axios.create({
        baseURL: `https://api.scripture.api.bible/v1/bibles/${bible}`,
        headers: { 'api-key': 'd68f9b3e5064f76228e48213b3694465' }
    });

    const resp = await instance.get();

    if (!resp.data) {
        throw new Error('No se encontro info para esa biblia ');
    }

    const data = resp.data.data;
    const name = data.name;
    const abrev = data.abbreviation;
    const desc = data.description;
    const copy = data.copyright;

    return {
        name,
        abrev,
        desc,
        copy
    };

};

module.exports = {
    getBibilaInfo
};