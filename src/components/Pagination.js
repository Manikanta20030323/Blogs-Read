import React, { useContext } from "react";
import { ContextName } from "../Context/AppContext";
import './pagination.css'
function Pagination()
{
    const  {fetchBlogs,totalPages,currentPage} =useContext(ContextName);
    return(
        <div className="pagination-container">
            <div className="butt-div">
                <button className="button">Previous</button>
                <button className="button">Next</button>
            </div>
            <div className="page-no">
                page {currentPage} of {totalPages}
            </div>
        </div>
    )
}
export default Pagination;