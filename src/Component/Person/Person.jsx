const Person = (props) =>{
   
//props -> A way to access the data from outside the Component
    return(
      <div>
      <p>My name is {props.name} and i am {props.age} years old.</p>
      <input type="text" onChange={props.changed} placeholder="Enter New Name..." />
      </div>
    )
}

export default Person;