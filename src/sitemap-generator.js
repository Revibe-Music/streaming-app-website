require("babel-register")({
  presets: ["es2015", "react"]
});

const API_HOST = "https://api.revibe.tech/v1/";
 
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;
const axios = require("axios");

async function request(endpoint) {
  return axios({
    url: API_HOST + endpoint,
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    responseType: "json"
  })
}

async function getArtistIDs() {
  var artistIds = [], limit = 50;

  var res = await request("content/public/?limit=" + limit);

  var count = res.data.count, countIter = 0;

  while(count > 0) {
    for(let i = 0; i < (count > limit ? limit : count); i++) {
      var artist = res.data.results[i];
  
      artistIds.push({ id: artist.artist_id })
    }

    if(count > limit)
      count -= limit;
    else count -= count;

    countIter++;

    if(count > 0)
      res = await request(`content/public/?limit=${limit}&offset=${(limit*countIter)}`)
  }

  return artistIds
}

async function getBlogIDs() {
  var blogIds = [], limit = 50;

  var res = await request("administration/blog/");

  var count = res.data.count, countIter = 0;

  while(count > 0) {
    for(let i = 0; i < (count > limit ? limit : count); i++) {
      var blog = res.data.results[i];
  
      blogIds.push({ id: blog.id })
    }

    if(count > limit)
      count -= limit;
    else count -= count;

    countIter++;

    if(count > 0)
      res = await request(`administration/blog/?limit=${limit}&offset=${(limit*countIter)}`)
  }

  return blogIds
}

async function generateSitemap() {
  try {
    var artistIds = await getArtistIDs()
    var blogIds = await getBlogIDs()

    const paramsConf = {
      "/relink/:id": artistIds,
      "/blog/:id": blogIds
    }

    return (
      new Sitemap(router)
        .applyParams(paramsConf)
        .build("https://revibe.tech")
        .save("./public/sitemap.xml")
    );
  } catch(e) {
    console.log("Error when generating the sitemap!")
    console.log(e)
  }
}

generateSitemap()
.then(() => console.log("Sitemap generated!"))
.catch(err => {
  console.log("Error when generating the sitemap!")
  console.log(err)
})
.finally(() => process.exit())