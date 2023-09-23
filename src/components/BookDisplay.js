///////////////////////////
import React, { useState } from "react";

const BookDisplay = ({ display }) => {
  const [info, setInfo] = useState();
  let [data, Setdata] = useState("");

  function Setindex(id) {
    // {<div><h1>{view.volumeInfo.authors}</h1>
    //             <h2>volumes:{view.volumeInfo.title}</h2>
    //             <p>des :{view.volumeInfo.description}</p>
    //             </div>}
    display.map((ele, index) => {
      if (index === id) {
        Setdata(ele.volumeInfo);
        console.log(data);
      }
    });
    // console.log(data);
  }

  return (
    <div id="container">
      {data && (
        <div>
          <img src={data.imageLinks.thumbnail}></img>
          <h1>{data.title}</h1>
          <h2>{data.authors.join(" ")}</h2>
          <p>{data.description}</p>
          <div className="Ratings">
            <p>Ratings Count : {data.ratingsCount ? data.ratingsCount : 2}</p>
            <p>Avg Rating : {data.averageRating}</p>
            <p>Publisher: {data.publisher}</p>
            <p>Language : {data.language}</p>
          </div>
        </div>
      )}

      {display.map((view, index) => (
        <div>
          <img
            src={view.volumeInfo.imageLinks["smallThumbnail"]}
            alt="img"
            onClick={() => Setindex(index)}
          ></img>
        </div>
      ))}
    </div>
  );
};
export default BookDisplay;
