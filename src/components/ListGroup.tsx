import { MouseEvent, useState } from "react";

// {items: [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
  // Hook: a function to tap into built in features in React (This component will have state that will change over time)
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   arr[0]; //variable
  //   arr[1]; //updater function

  // Event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  //   const getMessage = () => {
  //     return items.length === 0 ? <p> No items found!</p> : null;
  //   };
  //   if (items.length === 0)
  //     return (
  //       <>
  //         <h1>List</h1>
  //         <p>No items found!</p>
  //       </>
  //     );

  return (
    // Can use Fragment or <div> also along with empty braces like used below
    // <Fragment>
    <>
      <h1>{props.heading}</h1>
      {/* {items.length === 0 ? <p> No items found!</p> : null} */}
      {/* {getMessage()} */}

      {props.items.length === 0 && <p> No items found!</p>}
      <ul className="list-group">
        {/* <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li> */}
        {props.items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            // onClick={handleClick}
            onClick={() => {
              setSelectedIndex(index);
              props.onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
    // </Fragment>
  );
}

export default ListGroup;
