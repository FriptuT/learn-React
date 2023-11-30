import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
 const [alertVisible, setAlertVisibility] =  useState(false);

  return (
    <div>
    { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>}
      <MyButton onClick={() => setAlertVisibility(true)}>
        CLICK ME
      </MyButton>
    </div>
  );
}

export default App;
