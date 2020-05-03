import React from "react";
import "./styles.css";

function Exercise({ response, statement }) {
  return (
    <div className="exercise">
      <p>{statement}</p>
      <div className="exercise-response">
        {!!response ? response : "Tu respuesta aquí"}
      </div>
    </div>
  );
}

export default Exercise;
