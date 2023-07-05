
const Header = (prop) => {
  console.log(prop)
return(
  <>
  <h1> Course Name: {prop.name} </h1>
  </>
)
}

const Content = (props) => {
  return(
    <>
    <h2> Part: {props.part} </h2>
    <h3>Number of Exercises: {props.exercises} </h3>
    </>
  )
}

const Total = (prop) => {
  return(
    <>
    <p>Total Exercises to Complete: {prop.exercises1 + prop.exercises2 + prop.exercises3}</p>
    </>
  )
}



const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      ...
    </div>
  )
}

export default App