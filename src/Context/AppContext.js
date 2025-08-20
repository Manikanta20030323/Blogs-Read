import { useEffect } from "react";
import { createContext, useState } from "react";

 export const ContextName = createContext();
function AppContext({children}){
    

    const [posts,setPosts] = useState([]);
    const [totalPages,setTotalPages]=useState(0);
    const [currentPage,setCurrentPage]=useState(1);
    const [Loading,setLoading]=useState(false);
    const url='https://codehelp-apis.vercel.app/api/get-blogs';

    useEffect(()=>{
        console.log("namste mani in useeffect ", currentPage)
        console.log("working properly");
        fetchBlogs();
    },[currentPage])
  async  function  fetchBlogs()
    {
        try{
            setLoading(true);
            let data=await fetch(`${url}?page=${currentPage}`);
             data=await data.json();
             console.log(data);
             setPosts(data.posts);
             setCurrentPage(data.page);
             setTotalPages(data.totalPages);
             setLoading(false);
             
        }
        catch(error)
        {

        }
    }
    function handlepagenumber(pno)
    {
       setCurrentPage(pno)
   
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
        fetchBlogs,
        handlepagenumber
    }
    return(
        <ContextName.Provider value={val}>
            {children}
        </ContextName.Provider>
    )
}
export default AppContext;