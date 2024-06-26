import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const initialPoints = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(initialPoints);

  const getMostVotesAnecdote = ()=> {
    let max = Math.max(...points);
    let id = points.findIndex(x => x === max);
    if(id){
      return id;
    }
    else return 0;
  }

  const maxVotesId = getMostVotesAnecdote();
  const maxVotesAnecdote = anecdotes.find((x, id) =>  id === maxVotesId);

  const getNextAnecdote = () => {
    const randomNum = generateRandomIntegerInRange(0, anecdotes.length - 1);
    setSelected(randomNum);
  };

  const generateRandomIntegerInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const vote = () => {
    const copy = [...points];
    let newVal = copy[selected] + 1;
    copy[selected] = newVal;
    setPoints(copy);
  };
  

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>

      <div className="buttons">
        <button onClick={getNextAnecdote}>next anecdote</button>
        <button onClick={vote}>vote</button>
      </div>

      <h1>Anecdote with most votes</h1>
      <div>{maxVotesAnecdote}</div>
    </div>
  );
};

export default App;
