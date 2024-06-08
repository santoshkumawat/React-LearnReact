import { useState, useEffect } from "react";
import React from "react";
import { getPosts } from "./posts";
import PostCard from "./PostCard";

const Posts = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((post) => setData(post));
  }, []);

  return (
    <div className='posts-container'>
      <h1>Fetch data from an API</h1>
      {data ? (
        data.map((data) => <PostCard key={data.id} props={data} />)
      ) : (
        <p>"No Data"</p>
      )}
    </div>
  );
};

export default Posts;
