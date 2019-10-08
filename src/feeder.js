let axios = require("axios")
const fs = require('fs');
let mongoose = require('mongoose')
let EventModel = require("../models/Event")
let path = require("path")
const baseURL = "https://openagenda.com/agendas/49405812/events.json?lang=fr&key=aa7d7eac3dc04a5fa98924368f080baf";
const pageLimit = 160;
const start_page = 102;
require('dotenv').config({ path: path.join(__dirname, '../.env') })


function filterData(e) {
    if (e == undefined) return
    if (e.keywords == undefined) {

        keywords = null
    }
    else {
        keywords = e.keywords.fr
    }

    console.log(keywords)

    return {
        name: e.title.fr,
        address: e.address,
        image: e.image,
        keywords: keywords,
        range: e.range.fr,
        description: e.longDescription,
        image_url: e.image,
        location: { coordinates: [e.latitude, e.longitude] },
        year: 2019,
        event_begin: e.timings[0].start,
        event_end: e.timings[e.timings.length - 1].end,
        city: e.location.name
    }

}

async function recursiveGet(url, page, finalRes) {
    const res = await axios.get(baseURL + `&page=${page}`)
    finalRes = finalRes.concat(res.data.events);
    page += 1;
    console.log(page + " : " + finalRes.length)
    if (page < pageLimit) return recursiveGet(url, page, finalRes);
    else return finalRes;
}

(async function getData() {
    const finalCall = await recursiveGet(baseURL, start_page, []);
    EventModel
        .insertMany(finalCall.map(filterData))
        .then(() => console.log("mash'allah"))
        .catch(err => console.log(err))
    // console.log(finalCall.map(filterData));
}());

