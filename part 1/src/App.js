const Header = (props) => {
  return <h1>{props.course}</h1>
}
const Part = (props) =>{
  return <p>
    {props.part} {props.exercises}
  </p>
}
const Content = (props) => {
  return (<div>
    <Part part = {props.part1} exercises = {props.exercises1}></Part>
    <Part part = {props.part2} exercises = {props.exercises2}></Part>
    <Part part = {props.part3} exercises = {props.exercises3}></Part>
  </div>)
}
const Total  = (props) => {
    return <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
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
      <Header course={course} ></Header>
      <Content part1 ={parts[1].name} part2 ={parts[2].name} part3 ={parts[3].name}
        exercises1 = {parts[1].exercises} exercises2 = {parts[2].exercises} exercises3 = {parts[3].exercises}>
      </Content>
      <Total  exercises1 = {parts[1].exercises} exercises2 = {parts[2].exercises} exercises3 = {parts[3].exercises}>
      </Total>
      
    </div>
  )
}

export default App