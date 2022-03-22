import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  return (
    <article className="card">
      <div>
        <p className="card--font-styling-1">{data.date}</p>
      </div>
      <div>
        <a
          href={data.url}
          className="card--font-styling-1 card__name"
          target="_blank"
          rel="noreferrer"
        >
          {data.name}
        </a>
      </div>
      <div>
        <p className="card--font-styling-1">{data.description}</p>
      </div>
      <div>
        <ul>
          {data.bullets.map((x) => (
            <li key={`card-${x.slice(0, 3)}`}>
              <p className="card--font-styling-1">{x}</p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Card;
