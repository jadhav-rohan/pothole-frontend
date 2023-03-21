import React from "react";

const Pagination = ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='d-flex justify-content-center mt-1'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className = "btn btn-primary hover m-1 active"
                        //  className={page == currentPage ? "active" : ""}
                        >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;