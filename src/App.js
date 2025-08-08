
import React, { useContext, useEffect } from "react";

import {ContextName}  from "./Context/AppContext";
export default function App() {

const  {fetchBlogs} =useContext(ContextName);
useEffect(() => {
    fetchBlogs();
  }, []);
  return <div>Hello World</div>;
}
