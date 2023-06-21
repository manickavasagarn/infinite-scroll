import React, { useEffect, useState } from "react";

function Card(props) {
  return (
    <div className="col-3">
      <div class="card mt-3 mb-3 w-100" style={{"backgroundColor":props.obj}}>
        <div class="card-body">
          <h5 class="card-title">Card title {props.id}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#top" class="card-link">
            <button className="btn btn-info">Top</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
