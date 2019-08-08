import React, { useState, useEffect } from 'react';
import "./Community.css";
var cheerio = require("cheerio");

var axios = require("axios");

export function Community() {
const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("https://swift-crag.herokuapp.com/community/scrape", {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      setArticle(data);
    });     
}); 
    console.log({article}) 
    
    return (
      <div>
      
        
          <h3>Community</h3>
        
        
      </div>
    ); 

  }


export default Community;


