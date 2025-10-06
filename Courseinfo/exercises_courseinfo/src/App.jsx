const Header =(props)=> {
console.log(props)
return (
  <p>The course title is: {props.course}</p>
)
}

const Part=(props)=> {
  console.log(props)
  return (
    <p>Part name: {props.name};  Exercise: {props.exercises}</p>
  )
}

const Content =(props)=> {
    console.log(props)
   return(
    <>
<Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
<Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
<Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>

</>
  )
}

const Total =(props)=> {
  console.log(props)
    const total= props.parts.reduce ((sum, parts) => sum + parts.exercises, 0);

  return(
<p>The total is: {total}</p>
  )
}

const App =()=> {
const course = {
  name: 'Half Stack application development',
  parts: [
     {
    name: 'Fundamentals of React',
    exercises: 10,
  },
{
    name:'Using props to pass data',
    exercises: 7,
  },
{
    name: 'State of a component',
    exercises: 14,
  },
]
}
  
  const tally = course.parts.map(parts => parts.exercises)
  console.log(tally)


  return(
<div> 

  <Header course={course.name}/>
  <Content parts={course.parts}/>
  <Total parts={course.parts}/>

</div>
  )


}

export default App
