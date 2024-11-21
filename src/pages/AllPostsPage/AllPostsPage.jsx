import React from "react";
import "./AllPostsPage.css";
import { DATA } from "../../mockData/data";


const AllPostsPage = () => {
  const [page, setPage] = useState(null);
  
  const changePage = () => {
   setPage(() => post.id);
};


  return (
    <div className="all-posts-page">
      <h1>Welcome to All Posts Page</h1>
      <div className="post-wrapper">
        {/* mapiramo kartice*/}
        { DATA.map((post) => {
          return <div className="post-card">
            <h2>{post.title}</h2>
            <h3>{`By: ${post.createdBy}`}</h3>
            <h3>{post.description}</h3>
            <button>View Post</button>
          </div>
        })}
      </div>
    </div>
  );
};

export default AllPostsPage;



<button>View Post</button>
