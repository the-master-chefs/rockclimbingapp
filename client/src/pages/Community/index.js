import React, { useState, useEffect } from 'react';
import "./Community.css";



export function Community() {
const [picture, setPicture] = useState([]);
const [article, setArticle] = useState([]);
const [deal, setDeal] = useState([]);

function fetchPictures() {
  console.log('fetching pictures')
  fetch("/type/picture", {
      method: "GET"
    })
    .then(res => res.json())
    .then(data => {
      console.log('this is the picture data', data)
      setPicture(data);
    }); 
}

 function fetchArticles() {
   fetch("http://localhost:3001/type/article", {
       method: "GET"
     })
     .then(res => res.json())
     .then(data => {
      console.log('this is the article data', data)
       setArticle(data);
     }); 
 }

 function fetchDeals() {
   fetch("http://localhost:3001/type/deal", {
       method: "GET"
     })
     .then(res => res.json())
     .then(data => {
      console.log('this is the deal data', data)
       setDeal(data);
     }); 
     console.log({deal})
 }
useEffect(() => {
  fetchPictures();
  fetchArticles();
  fetchDeals();
},[]);

    
    return (
      <div>
      
        
      {JSON.stringify(picture)}
      </div>
    ); 

  }


export default Community;


