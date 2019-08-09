const express = require("express");
const routes = require("./controllers");
const app = express();
const cors = require("cors");
const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 3001;
const db = require("./models");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//article scraper
axios.get("https://rockandice.com/climbing-news/").then(function(response) {
  const $ = cheerio.load(response.data);
  const result = { type: "Article", site: "RockandIce.com" };

  $(".categoryBlock").each(function(i, element) {
    result.title = $(this)
      .children("div")
      .children("a")
      .children("img")
      .attr("alt");
    result.url = $(this)
      .children("div")
      .children("a")
      .attr("href");
    result.picture = $(this)
      .children("div")
      .children("a")
      .children("img")
      .attr("src");
    result.articleDate = $(this)
      .children("div")
      .children("span")
      .text();

    db.scrape
      .create(result)
      .then(function(dbArticle) {
        console.log("--Article Added--");
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});

//picture scraper
axios
  .get("https://www.mountainproject.com/featured-photos")
  .then(function(response) {
    const $ = cheerio.load(response.data);
    const result = { type: "Picture", site: "Mountainproject.com" };

    $(".card-with-photo").each(function(i, element) {
      result.title = $(this)
        .children("a")
        .children("div")
        .children("img")
        .attr("alt");
      result.url = $(this)
        .children("a")
        .attr("href");
      result.picture = $(this)
        .children("a")
        .children("div")
        .children("img")
        .attr("src");

      db.scrape
        .create(result)
        .then(function(dbArticle) {
          console.log("--Picture Added--");
          cleanUpPics();
        })
        .catch(function(err) {
          console.log(err);
        });
    });
  });

//deal scraper
axios.get("https://www.backcountry.com/rc/sale-climb").then(function(response) {
  const $ = cheerio.load(response.data);
  const result = { type: "Deal", site: "Backcountry.com" };
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
    result.description = $(this)
      .children("div")
      .children("span")
      .children("span")
      .slice(1, 2)
      .text();

    db.scrape
      .create(result)
      .then(function(dbArticle) {
        console.log("--Deal Added--");
        cleanUpDeals();
        cleanUpDealsUndefined();
      })
      .catch(function(err) {
        console.log(err);
      });
  });
});

function cleanUpPics() {
  db.sequelize.query(
    "DELETE FROM `scrapeddata`.`scrape` WHERE (`type` = 'Picture') and (`url` is null);"
  );
}

function cleanUpDeals() {
  db.sequelize.query(
    "DELETE FROM `scrapeddata`.`scrape` WHERE (`type` = 'Deal') and (`description` = 'from ');"
  );
}

function cleanUpDealsUndefined() {
  db.sequelize.query(
    "DELETE FROM `scrapeddata`.`scrape` WHERE (`type` = 'Deal') and (`picture` = 'https:undefined');"
  );
}

//retrieving scraper info from database
  app.get("/scrape", (req, res) => {
  db.scrape.findAll({}).then(story => res.json(story));
});  

app.get("/:attribute/:value", (request, response) => {
  //Note that attribute can be firstname, lastname, phonenumber, etc.
  db.scrape.findAll({
    where: {
      [request.params.attribute]: request.params.value
    }
  }).then(picture => response.json(picture));
});

 
// Add routes, both API and view
//app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
  // const run = require("./scripts/seedDB");

  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
