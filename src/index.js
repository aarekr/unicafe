import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return(
    <div>
      <h2>give feedback</h2>
      <p>
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </p>

      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  return(
    <div>
      <h2>statistics</h2>
      <p>
        good {good} <br/>
        neutral {neutral} <br />
        bad {bad} <br />
        all {good + neutral + bad} <br />
        average {(1*good+0*neutral-1*bad)/(good + neutral + bad)} <br />
        positive {100*good/(good + neutral + bad)} % <br />
      </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))