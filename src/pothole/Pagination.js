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
                         className={page === currentPage ? "active bg-primary btn shadow-2 m-2" : "btn bg-light shadow-2 m-2"}
                        >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;