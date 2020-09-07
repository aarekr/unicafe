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
        <Button onClick={handleGoodClick} text='good' />
        <Button onClick={handleNeutralClick} text='neutral' />
        <Button onClick={handleBadClick} text='bad' />
      </p>

      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  if(good+neutral+bad == 0){
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return(
    <div>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={good + neutral + bad} />
      <StatisticLine text="average" value ={(1*good+0*neutral-1*bad)/(good + neutral + bad)} />
      <StatisticLine text="positive" value ={100*good/(good + neutral + bad)} />
    </div>
  )
}

const StatisticLine = ({ text, value}) => {
  if(text === "positive") {
    return(
      <div>
      {text}{' '}{value}{' %'}
    </div>
    )
  }
  return(
    <div>
      {text} {value}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

ReactDOM.render(<App />, document.getElementById('root'))