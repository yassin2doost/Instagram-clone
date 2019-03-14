import React, { Component } from "react";
import { Link } from "react-router";
import CSSTransitionGroup from "react-addons-css-transition-group";

class Photo extends Component {
  render() {
    const { post, i, comment, increment } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`/view/${post.code}`}>
            <img
              src={post.dispay_src}
              alt={post.caption}
              className="grid-photo"
            />
          </Link>
          <CSSTransitionGroup
            transitionName="like"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            <span key={post.likes} className="like-hearts" />
          </CSSTransitionGroup>
        </div>

        <figcaption>
          <p>{post.caption}</p>
          <div className="control-buttons">
            <button onClick={increment.bind(null, i)} className="likes">
              &hearts; {post.likes}
            </button>
            <Link className="button " to={`/views/${post.code}`}>
              <span className="speech-bubble" />
              {comments[post.code] ? comments[post.code].length : 0}
            </Link>
          </div>
        </figcaption>
      </figure>
    );
  }
}

export default Photo;
