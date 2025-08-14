import React, { useContext } from "react";
import { ContextName } from "../Context/AppContext";
import './pagination.css'
function Pagination()
{
    const  {totalPages,currentPage,handlepagenumber} =useContext(ContextName);
   
    return(
        <div className="pagination-container">
            <div className="butt-div">
                <button onClick={()=>{
                    handlepagenumber(6);
                    
                    let curPage=(currentPage-1);
                  
                    if(curPage===0)
                    {
                        curPage=totalPages;
                    }
                   
                     handlepagenumber(curPage);
                }} className="button">Previous</button>
                <button onClick={()=>{
                    
                    let curPage=(currentPage+1);
                    if(curPage>totalPages)
                    {
                        curPage=curPage%totalPages;
                    }
                  
                    handlepagenumber(curPage);
                }} className="button">Next</button>
            </div>
            <div className="page-no">
                page {currentPage} of {totalPages}
            </div>
        </div>
    )
}
export default Pagination;