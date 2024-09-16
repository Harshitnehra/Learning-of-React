import { useState } from "react";
import CompAppName from "./CompAppName";
import Todoitem from "./TodoItem"
function App() {
  return (
    <center>
      <h1>todolist</h1>
      <div class="container text-center">
        <CompAppName></CompAppName>
        <Todoitem></Todoitem>
        <Todoitem></Todoitem>

        <div class="row">
          <div class="col-6">siddharth nehra</div>
          <div class="col-4">24/7/2005</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              danger
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
