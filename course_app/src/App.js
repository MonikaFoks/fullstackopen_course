const Header = (course) => {
  return (
    <>
      <h1>{course.text}</h1>
    </>
  )
}

const Content = (content) => {
  return (
    <>
      <p>{content.partNumber} {content.numOfExercises}</p>
    </>
  )
}

const Total = (sum) => {
  return (
    <p>Number of exercises: {sum.count}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header text={course}/>
      <Content partNumber={part1} numOfExercises={exercises1}/>
      <Content partNumber={part2} numOfExercises={exercises2}/>
      <Content partNumber={part3} numOfExercises={exercises3}/>
      <Total count={exercises1 + exercises2 + exercises3}/>
    </>
  )
}

export default App