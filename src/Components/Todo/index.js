import React, { useState } from "react";
import "./style.css";

function Todo() {
  const [item, setItem] = useState("");
  const [list, setlist] = useState([]);

  function addList() {
    setlist((list) => {
      const updatedeList = [...list, item];
      setItem("");
      return updatedeList;
    });
  }
  function removeList(i) {
    const updateData = list.filter((eleme, id) => {
      return i != id;
    });
    setlist(updateData);
  }
  function removeAll (){
    setlist([])
  }
  return (
    <>
      <div>
        <h1 className="mainHeading">ToDo List</h1>
        <div className="todoForm">
          <input
            className="textField"
            type="text"
            placeholder="Add Item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button onClick={addList} type="submit" className="button">
            Add List{" "}
          </button>

          <p className="mainHeading"></p>
          {list != [] &&
            list.map((data, i) => {
              return (
                <>
                  <p key={i}>
                    <div className="listItems">
                      <div className="textField">{data}</div>
                      <button className="button">Edit</button>
                      <button className="button" onClick={() => removeList(i)}>
                        Delete
                      </button>
                    </div>
                  </p>
                </>
              );
            })}
          {list.length>=1 && <button onClick={removeAll} type="submit" className="button">
            Delete All List
          </button>}
        </div>
      </div>
    </>
  );
}

export default Todo;
