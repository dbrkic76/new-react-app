import React from "react";
import "./SinglePage.css";
import { DATA } from "../../mockData/data";

const SinglePage = () => {
  return (
    <div className="single-post-page">
      <h1>Single Post</h1>
      <div className="single-post-wrapper">
        {/* mapiramo kartice*/}
        {DATA.map((post) => {
          return (
            <div className="single-post-card">
              <h2>{post.title}</h2>
              <h3>{`Created On: ${post.createdAt}`}</h3>
              <h3>{post.text}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePage;
