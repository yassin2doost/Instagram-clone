import React from "react";
import Photo from "./Photo";

const PhotoGrid = props => {
  return (
    <div className="photo-grid">
      {this.props.map((post, i) => (
        <Photo {...this.props} key={i} i={i} post={post} />
      ))}
    </div>
  );
};

export default PhotoGrid;
