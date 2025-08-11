import React, { useContext } from "react";
import { ContextName } from "../Context/AppContext";
function Pagination()
{
    const  {fetchBlogs,totalPages,currentPage} =useContext(ContextName);
    return(
        <div className="pagination">
            <div>
                <button>Previous</button>
                <button>Next</button>
            </div>
            <div>
                page {currentPage} of {totalPages}
            </div>
        </div>
    )
}
export default Pagination;