import { Link } from "react-router-dom";

import "./Tag.scss";

const Tags = ({ tag, link }) => {
  return (
    <Link className="tag" to={link || "#"}>
      {tag}
    </Link>
  );
};

export default Tags;
