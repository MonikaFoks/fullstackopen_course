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
      <Part part={content.parts[0].part} exercises={content.parts[0].exercises}/>
      <Part part={content.parts[1].part} exercises={content.parts[1].exercises}/>
      <Part part={content.parts[2].part} exercises={content.parts[2].exercises}/>
    </>
  )
}

const Part = (part) => {
  return (
    <>
      <p>{part.part} {part.exercises}</p>
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

  const parts = [
    {part: 'Fundamentals of React', exercises: 10},
    {part: 'Using props to pass data', exercises: 7},
    {part: 'State of a component', exercises: 14}
  ]

  return (
    <>
      <Header text={course}/>
      <Content parts={parts}/>
      <Total count={parts[0].exercises+ parts[1].exercises + parts[2].exercises}/>
    </>
  )
}

export default App