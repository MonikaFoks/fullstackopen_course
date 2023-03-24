import { useState } from 'react'

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad
  const average = (props.good * 1 + props.bad * (-1))/(sum)
  const positivePercentage = ((props.good*100/sum) + "%")

  if (props.good === 0 & props.neutral === 0 & props.bad === 0)
    return <div>No feedback given</div>
  else
    return(
      <div>
        <table>
          <tbody>
          <tr>
            <td>good</td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>neutral</td>
            <td>{props.neutral}</td>
          </tr>
          <tr>
            <td>bad</td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positivePercentage}</td>
          </tr>
          </tbody>
        </table>
      </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

//const StatisticsLine = (props) => (<p>{props.text} {props.value}</p>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App