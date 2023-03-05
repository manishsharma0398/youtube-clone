import "./Comment.scss";

const Comment = ({ comment }) => {
  const { author, commentId, content, creatorHeart, publishedTimeText, stats } =
    comment || {};

  return (
    <div className="comment">
      <div className="comment-left">
        {
          author?.avatar?.map((pic, i) => (
            <img src={pic?.url} alt="" key={i} />
          ))[author?.avatar?.length - 1]
        }
      </div>
      <div className="comment-right">
        <div className="comment-right-top">
          <h3>{author?.title}</h3>
          <span>{publishedTimeText}</span>
        </div>
        <div className="comment-right-middle">{content}</div>
        {/* <div className="comment-right-end">{stats?.replies}</div> */}
      </div>
    </div>
  );
};
export default Comment;
