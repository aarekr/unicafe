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
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad}) => {
  const total = good+neutral+bad
  if(total === 0){
    return(
      <div>No feedback given</div>
    )
  }
  return(
    <div>
      <StatisticLine text1="good" text2="neutral" text3="bad" text4="all" text5="average" text6="positive"
          value1={good} value2={neutral} value3={bad} 
          value4={total} value5={(1*good+0*neutral-1*bad) / total} 
          value6={100*(good / total)} />
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <div>
      <table>
        <tbody>
          <tr><td>{props.text1}</td><td>{props.value1}</td></tr>
          <tr><td>{props.text2}</td><td>{props.value2}</td></tr>
          <tr><td>{props.text3}</td><td>{props.value3}</td></tr>
          <tr><td>{props.text4}</td><td>{props.value4}</td></tr>
          <tr><td>{props.text5}</td><td>{props.value5}</td></tr>
          <tr><td>{props.text6}</td><td>{props.value6}{' %'}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

ReactDOM.render(<App />, document.getElementById('root'))