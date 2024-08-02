import { ReactNode, useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  // 1
  // let items = ["Islamabad", "Rawalpindi", "Taxila", "Karachi", "Peshawar"];
  // const handleSelectItem = (item: String) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);

  // const handleSelectItem = (item: ReactNode) => {
  //   console.log(item, " is selected!");
  // };
  return (
    <div>
      {/* 1 */}
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}

      {/* <Alert>
        Hello <span>World</span>
      </Alert> */}

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="secondary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;
