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
      <Part name={content.parts[0].name} exercises={content.parts[0].exercises}/>
      <Part name={content.parts[1].name} exercises={content.parts[1].exercises}/>
      <Part name={content.parts[2].name} exercises={content.parts[2].exercises}/>
    </>
  )
}

const Part = (part) => {
  return (
    <>
      <p>{part.name} {part.exercises}</p>
    </>
  )
}

const Total = (parts) => {
  return (
    <p>Number of exercises: {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header text={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
}

export default App