import React from 'react'

// Here props is an object that contains all the properties passed from the parent component (App) to this child component (Card). We can access these properties using props.name, props.age, and props.description. We can name it anything we want.
const Card = (props) => {

  console.log(props);

  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.name}, {props.age}</h1>
        <p>{props.description}</p>
        <button>View Profile</button>
      </div>  
  )
}

export default Card
