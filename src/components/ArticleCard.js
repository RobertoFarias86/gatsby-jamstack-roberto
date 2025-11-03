import React from "react";
import { Link } from "gatsby";

const ArticleCard = ({ slug, title, date, excerpt }) => {
  return (
    <article className="card">
      <h2>
        <Link to={`/posts/${slug}/`}>{title}</Link>
      </h2>
      <p className="muted">{date}</p>
      <p>{excerpt}</p>
      <Link className="btn" to={`/posts/${slug}/`}>
        Ler mais
      </Link>
    </article>
  );
};

export default ArticleCard;