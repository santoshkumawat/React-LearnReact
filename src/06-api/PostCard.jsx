import React from "react";
import { getPosts } from "./06-api";

const PostCard = () => {
  useEffect(() => {
    getPosts().then((posts) => console.log(posts));
  }, []);

  return (
    <div>
      <h3>PostCard</h3>
    </div>
  );
};

export default PostCard;
