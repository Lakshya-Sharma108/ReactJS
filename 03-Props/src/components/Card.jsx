import React from 'react'

// Here props is an object that contains all the properties passed from the parent component (App) to this child component (Card). We can access these properties using props.name, props.age, and props.description. We can name it anything we want.
const Card = (props) => {

  console.log(props);

  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1743105351262-3f9e6944920a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.name}</h1>
        <h4>Age: {props.age}</h4>
        <p>{props.description}</p>
        <button>View Profile</button>
      </div>  
  )
}

export default Card
