import { useState } from 'react'

const StatisticLine =(props)=> {
  console.log(props)
  return (
    <tr>
    <td> {props.text} {props.value}</td>
     <td>{props.text === 'positive' ? '%' : ''}</td>
     </tr>
  
  )
}

const Statistics =(props)=> {
  console.log(props)
  
  if (props.all === 0) {
    return(
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <tbody>
    <StatisticLine text ="good" value = {props.clicks.good}/>   
    <StatisticLine text ="neutral" value = {props.clicks.neutral}/>
    <StatisticLine text ="bad" value = {props.clicks.bad}/>   
    <StatisticLine text ="all" value = {props.all}/>
    <StatisticLine text ="average" value = {props.average}/> 
    <StatisticLine text ="positive" value = {props.positive}/>
    
     </tbody>
    </table>
  )

}

const Button =(props)=> (
  <button onClick = {props.onClick}>
    {props.text}
    </button>
)

const App = () => {

  const[clicks, setClicks]= useState ({good: 0, neutral: 0, bad: 0})
  
  
  const handleGoodClicks =()=> {
    console.log()
    const newClicks = {
      ...clicks,
      good: clicks.good + 1,
      }
          setClicks(newClicks)
          console.log(newClicks)

    }

      const handleNeutralClick =()=> {
        const newClicks = {
          ...clicks,
          neutral: clicks.neutral + 1
        }
        setClicks(newClicks)
        console.log(newClicks)
      }
      

      const handleBadClick =()=> {
        const newClicks = {
          ...clicks,
          bad: clicks.bad + 1
        }

        setClicks(newClicks)
        console.log(newClicks)
      }

      const all = clicks.good + clicks.neutral + clicks.bad

      const calculateAverage =()=>{
        if (all === 0) return 0
        return (clicks.good - clicks.bad)/ all
      }
       const average = calculateAverage()

      const calculatePositive =()=> {
        if (all ===0) return 0 
       return (
         (clicks.good/all) * 100
       )
      }
        

      const positive = calculatePositive()

   const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  
  const handleAnecdotesClick =()=> {
    const i = Math.floor(Math.random()* anecdotes.length)
    setSelected(i)
    console.log(i)
  }


  const handleVotes = ()=> {
    const copy = [...votes]
    copy[selected] +=1
    setVotes(copy)
     console.log(copy) 
  }
   
    
    const mostVoted = votes.indexOf(Math.max(...votes))
  return (
   
 <div>
      
      <Button onClick={handleGoodClicks}text="good"/>
      <Button onClick={handleNeutralClick} text = 'neutral'/>
      <Button onClick={handleBadClick} text = 'bad'/>
      <h2>statistics</h2>
      <Statistics clicks={clicks} all={all} average ={average} positive={positive}/>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <button onClick={handleVotes}>vote</button>
      <button onClick ={handleAnecdotesClick}>next anecdote</button>

      <h2>Anecdote with most votes </h2>
      <p>{anecdotes[mostVoted]}</p>
      <p>has {votes[mostVoted]} votes</p>
      
    </div>
  )
}

export default App