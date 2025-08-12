
import React, { useContext, useEffect } from "react";
import Heading from "./components/Heading";
import './App.css';
import {ContextName}  from "./Context/AppContext";
import Blog from "./components/Blog";
import Pagination from "./components/Pagination";
export default function App() {

const  {fetchBlogs,Loading,posts} =useContext(ContextName);
useEffect(() => {
    fetchBlogs();
  },[]);


  return <div className="App">

  <div className="heading-div">
    <Heading ></Heading>
  </div>
    

    <div className="content-div">
      {
        posts.map((post)=>(
          <Blog post={post} key={post.id}/>

        ))
      }
    </div>
    <div className="pagination-wrapper">
      <Pagination />
    </div>
  </div>;
}
