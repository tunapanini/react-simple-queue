import React from "react";
import Queue from "./Queue";
import QueueBox from "./components/QueueBox";
const myQueue = new Queue("A", "B", "C", "D", "E");

function App() {
  const [queueElements, setQueueElements] = React.useState(myQueue.elements);
  const [dequeuedValue, setDequeuedValue] = React.useState(null);
  const [newValue, setNewValue] = React.useState("F");

  return (
    <div>
      <QueueBox elements={queueElements} />
      <p>
        dequeuedValue: <span>{dequeuedValue}</span>
      </p>
      <p>
        <input
          type="text"
          value={newValue}
          onChange={({ target: { value } }) => setNewValue(value)}
        />
        <button
          onClick={() => {
            myQueue.enqueue(newValue);
            setQueueElements([...myQueue.elements]);
          }}
          type="button"
        >
          Enqueue
        </button>
        <button
          onClick={() => {
            const val = myQueue.dequeue();
            console.log(val);
            setDequeuedValue(val);
            setQueueElements([...myQueue.elements]);
          }}
          type="button"
        >
          dequeue
        </button>
      </p>
    </div>
  );
}

export default App;
