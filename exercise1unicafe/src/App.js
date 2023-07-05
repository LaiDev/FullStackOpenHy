import { useState } from 'react'

const ShowStats = (stats) => {
  let all = stats.good + stats.bad + stats.neutral
  let average = (stats.good - stats.bad) / all;
    return(
      <>
        <p>good {stats.good}</p>
        <p>neutral {stats.neutral}</p>
        <p>bad {stats.bad}</p>
        <p>all {all} </p>
        <p>average {average}</p>
        <p>positive {stats.good / all * 100}%</p>
      </>
    )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeeback = () =>{
    setGood(good + 1);
  }

  const neutralFeedback = () =>{
    setNeutral(neutral + 1);
  }

  const badFeedback = () =>{
    setBad(bad + 1);
  }

  

  return (
    <div>
      <h1>Give Feeback</h1>
      <button onClick={goodFeeback}>good</button>
      <button onClick={neutralFeedback}>neutral</button>
      <button onClick={badFeedback}>bad</button>
      <h1>Statistics</h1>
      <ShowStats good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App