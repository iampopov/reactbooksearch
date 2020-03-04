import React, { useState, useEffect } from "react";
import API from "../../utils/API"

function Search() {

const [books, setBooks] = useState({
  name: ""
})

const [result, setResult] = useState({
  bookName: "",
  author: "",
  image: "",
  synopsis: "" 
})

useEffect(() => {
     
}, [])

const handleInputChange = (e) => {
  const { name, value } = e.target
  setBooks({ name: value})
}

const handleFormSubmit = (e) => {
  e.preventDefault()
  API.searchBook(books.name)
  //console.log(books.name) //  {"": "holmes"}  
    .then(res => {
      console.log(res.data.items[0].id);
      // console.log(res.data.items.length);
      
      for (let i=0; i<res.data.items.length; i++) {
      
        //console.log(setResult);


        
        // console.log(res.data.items[i].volumeInfo.title);
        
      }
      
      // const searchRes = res.data.items.filter(item => item.volumeInfo.title)
      // console.log(searchRes);
      
    })
    .catch(err => console.log(err))
}

  return (
    <>
    <div className="form-group">
      <input onChange={handleInputChange} className="form-control" />
    </div>
    <button onClick={handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    Search Author
    </button>
    </>
  );
}

export default Search;
