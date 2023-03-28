const Header = ({text}) => {
  return (
    <>
      <h1>{text}</h1>
    </>
  )
}

const Content = ({parts}) => {
  return (
    <>
      {parts.map(part =>
        <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <>
      <p>{name} {exercises}</p>
    </>
  )
}

const Total = ({parts}) => {
  const totalExercises = parts.reduce(
    (previousPart, currentPart) => previousPart + currentPart.exercises,
    0);

  return (
    <b>Number of exercises: {totalExercises}</b>
  )
}

const Course = ({course}) => {
  return(
    <>
      <Header text={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )

}

export default Course