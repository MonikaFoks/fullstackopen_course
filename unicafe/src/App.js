import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad

  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }

  //const StatisticsLine = (props) => (<p>{props.text} {props.value}</p>)

  const Average = () => (good * 1 + bad * (-1))/(sum)

  const positivePercentage = () => ((good*100/sum) + "%")

  const Statistics = () => {
    if (good === 0 & neutral === 0 & bad === 0)
      return <div>No feedback given</div>
    else
      return(
        <div>
          <table>
            <tr>
              <td>good</td>
              <td>{good}</td>
            </tr>
            <tr>
              <td>neutral</td>
              <td>{neutral}</td>
            </tr>
            <tr>
              <td>bad</td>
              <td>{bad}</td>
            </tr>
            <tr>
              <td>average</td>
              <td>{Average()}</td>
            </tr>
            <tr>
              <td>positive</td>
              <td>{positivePercentage()}</td>
            </tr>
          </table>
        </div>
    )
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text={"good"}></Button>
      <Button handleClick={() => setNeutral(neutral + 1)} text={"neutral"}></Button>
      <Button handleClick={() => setBad(bad + 1)} text={"bad"}></Button>
      <h1>statistics</h1>
      <Statistics></Statistics>
    </div>
  )
}

export default App