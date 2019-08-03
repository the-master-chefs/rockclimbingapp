import React from "react";
import "./Community.css";
var cheerio = require("cheerio");

var axios = require("axios");

export function Community() {
    var results = [];
    console.log(
      "\n***********************************\n" +
        "Grabbing every thread name and link\n" +
        "from rockandice's board:" +
        "\n***********************************\n"
    ); 
    
    // Making a request via axios for reddit's "webdev" board. The page's HTML is passed as the callback's third argument
    axios.get("https://rockandice.com/climbing-news/").then(function(response) {
      // Load the HTML into cheerio and save it to a variable
      // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
      var $ = cheerio.load(response.data);
    
      // An empty array to save the data that we'll scrape
      
      console.log($);
      // With cheerio, find each p-tag with the "title" class
      // (i: iterator. element: the current element)
      $("h2").each(function(i, element) {
        // Save the text of the element in a "title" variable
        var title = $(element).text();
        console.log("title=", title);
        // In the currently selected element, look at its child elements (i.e., its a-tags),
        // then save the values for any "href" attributes that the child elements may have
        var link = $(element)
          .children()
          .attr("href");
    
        // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
          title: title,
          link: link
        });
      });
    
      // Log the results once you've looped through each of the elements found with cheerio
      console.log(results);
      
    });
    return (
        <div>
        
          
            <h3>Community</h3>
          
          
        </div>
      ); 

    }

  
  export default Community;


