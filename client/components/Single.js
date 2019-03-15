import React, { Component } from "raect";
import Photo from "./Photo";
import Comments from "./Comments";

class Single extends Component {
  render() {
    const i = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[i];
    return (
      <div>
        <Photo i={i} post={post} {...this.props} />;
        <Comments/>
      </div>
    );
  }
}

export default Single;
