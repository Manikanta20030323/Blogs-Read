import { createContext, useState } from "react";

 export const ContextName=createContext();
function AppContext({children}){

   
    const [posts,setPosts] = useState([]);
    const [totalPages,setTotalPages]=useState(0);
    const [currentPage,setCurrentPage]=useState(1);
    const [Loading,setLoading]=useState(false);
const url='https://codehelp-apis.vercel.app/api/get-blogs';
  async  function  fetchBlogs()
    {
        try{
            let data=await fetch(`${url}?page=${currentPage}`);
             data=await data.json();
             console.log(data);
        }
        catch(error)
        {

        }
    }

    let val={
        posts,
        setPosts,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
        Loading,
        setLoading,
        fetchBlogs
    }
    return(
        <ContextName.Provider value={val}>
            {children}
        </ContextName.Provider>
    )
}
export default AppContext;