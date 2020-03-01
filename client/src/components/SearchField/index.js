import React from "react";

function Search() {
  return (
    <>
    <div className="form-group">
      <input className="form-control" />
    </div>
    <button  style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    Search Author
    </button>
    </>
  );
}

export default Search;
