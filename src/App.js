import { useState } from "react";
import BasicForm from "./components/BasicForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <div className="app">
      {/* <SimpleInput onAddUser={usersHandler} /> */}
      <BasicForm />
    </div>
  );
}

export default App;
