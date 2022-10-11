import React, { useState } from "react";

import "./DictionaryS.css";

export default function Dictionary() { 

  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert (`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);

  }


    return <div className="DictionaryContent">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeywordChange} />        
        </form>
        </div>;
}

