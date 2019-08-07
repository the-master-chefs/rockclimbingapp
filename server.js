const express = require("express");
const routes = require("./controllers");
const app = express();
const cors = require("cors");

// var logger = require("morgan");
// var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

const PORT = process.env.PORT || 3001;
var db = require("./models");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// //article scraper
// axios.get("https://rockandice.com/climbing-news/").then(function(response) {
//   var $ = cheerio.load(response.data);
//   var result = { type: "Article", site: "RockandIce.com" };

//   $(".categoryBlock").each(function(i, element) {
//     result.title = $(this)
//       .children("div")
//       .children("a")
//       .children("img")
//       .attr("alt");
//     result.url = $(this)
//       .children("div")
//       .children("a")
//       .attr("href");
//     result.picture = $(this)
//       .children("div")
//       .children("a")
//       .children("img")
//       .attr("src");
//     result.articleDate = $(this)
//       .children("div")
//       .children("span")
//       .text();

//     db.scrape
//       .create(result)
//       .then(function(dbArticle) {
//         console.log("--Article Added--");
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   });
// });

// //picture scraper
// axios.get("https://www.mountainproject.com/featured-photos").then(function(response) {
//   var $ = cheerio.load(response.data);
//   var result = { type: "Picture", site: "Mountainproject.com" };

//   $(".card-with-photo").each(function(i, element) {
//     result.title = $(this)
//       .children("a")
//       .children("div")
//       .children("img")
//       .attr("alt");
//     result.url = $(this)
//       .children("a")
//       .attr("href");
//     result.picture = $(this)
//       .children("a")
//       .children("div")
//       .children("img")
//       .attr("src");

//     db.scrape
//       .create(result)
//       .then(function(dbArticle) {
//         console.log("--Picture Added--");
//       })
//       .catch(function(err) {
//         console.log(err);
//       });
//   });
// });

//deal scraper
axios.get("https://www.backcountry.com/rc/sale-climb").then(function(response) {
  var $ = cheerio.load(response.data);
  var result = { type: "Deal", site: "Moosejaw.com" };
  $("a.ui-pl-link").each(function(i, element) {
    result.title = $(this)
      .children("div")
      .children("img")
      .attr("alt");
    result.url = "https://www.backcountry.com" + $(this).attr("href");
    result.picture =
      "https:" +
      $(this)
        .children("div")
        .children("img")
        .attr("data-src");
    result.description = $(".ui-pl-pricing-low-price").text();
    db.scrape
      .create(result)
      .then(function(dbArticle) {
        console.log("--Deal Added--");
      })
      .catch(function(err) {
        console.log(err);
      });
  });
  console.log("-----------");
  console.log(result.title);
  console.log(result.url);
  console.log(result.picture);
  console.log(result.description);
});

// Add routes, both API and view
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({}).then(() => {
  // var run = require("./scripts/seedDB");

  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
