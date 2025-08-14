import React, { useContext } from "react";
import { ContextName } from "../Context/AppContext";
import './pagination.css'
function Pagination()
{
    const  {fetchBlogs,totalPages,currentPage,setCurrentPage} =useContext(ContextName);
  
    return(
        <div className="pagination-container">
            <div className="butt-div">
                <button onClick={()=>{
                    
                    let curPage=(currentPage-1);
                    console.log("hi , i came to previos button",currentPage);
                    if(curPage===0)
                    {
                        curPage=totalPages;
                    }
                    setCurrentPage(curPage);
                     fetchBlogs();
                     console.log("cur page is ",curPage)
                     console.log("prev page iss",currentPage);
                }} className="button">Previous</button>
                <button onClick={()=>{
                    console.log("hi , i came to next button");
                    let curPage=(currentPage+1);
                    if(curPage>totalPages)
                    {
                        curPage=curPage%totalPages;
                    }
                    setCurrentPage(curPage);
                    console.log("next page iss",currentPage);
                    fetchBlogs();
                }} className="button">Next</button>
            </div>
            <div className="page-no">
                page {currentPage} of {totalPages}
            </div>
        </div>
    )
}
export default Pagination;