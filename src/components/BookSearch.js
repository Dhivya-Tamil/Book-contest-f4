import React, { useState, useEffect } from "react";

let apikey = "AIzaSyCDgUAAjbrY4UXYtHFNpESFPLxAAO1yFE4";

const BookSearch = ({ setDisplay }) => {
  const [searchTerm, setSearchTerm] = useState("");

  let booksData;

  async function implementSearch() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apikey}&maxResults=10`;
    try {
      const response = await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data.volumeInfo.authors);
          setDisplay(
            // authors: data.volumeInfo.authors,
            // title: data.volumeInfo.title,
            // description: volumeInfo.description,
            data.items
          );
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <nav>
        <input
          type="text"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={implementSearch}>Search</button>
      </nav>
    </div>
  );
};

export default BookSearch;
