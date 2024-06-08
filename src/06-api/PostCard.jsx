import React, { useEffect, useState } from "react";
import "../00-stylesheet/06-api.css";
import { getImage } from "./posts";

const PostCard = ({ props }) => {
  const website = "https://" + props.website;
  const [img, setImg] = useState(null);

  useEffect(() => {
    getImage().then((image) => setImg(image));
  }, []);

  return (
    <div className='post-card'>
      <img src={img ? img : ""} alt={`user-${props.id}`} />
      <h3 className='post-title'>{props.name}</h3>
      <h4>@{props.username}</h4>
      <p>
        <span>
          {props.address.suite},{props.address.street},{props.address.city},
          {props.address.zipcode}
        </span>
      </p>
      <p>{props.email}</p>
      <p>{props.phone}</p>

      <p>
        <a href={website}>{props.website}</a>
      </p>

      <p>{props.company.name}</p>

      <p className='post-body'>{props.body}</p>
    </div>
  );
};

export default PostCard;
