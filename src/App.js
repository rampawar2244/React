import { Component } from "react";
import "./App.css";
//  import './Component/Sub-comp/Header.css'
// import Header from './Component/Sub-comp/Header';
import Person from "./Component/Person/Person";

class App extends Component {
  state = {
    Persons: [
      { name: "mnp", age: "123" },
      { name: "xyz", age: "234" },
      { name: "abc", age: "309" },
    ],
    showPerson: false
  };
  // onClickEventListner = (e) => {
  //   console.log(e);
  //   this.setState({
  //     Persons: [
  //       { name: "asnj", age: 34 },
  //       { name: "kavya", age: 21 },
  //       { name: "kavya", age: 22 },
  //     ],
  //   });
  // };

  // switchNameHandler = (e) => {
  //   this.setState({
  //     Persons: [
  //       { name: e.target.value, age: 22 },
  //       { name: "xyzas", age: 22 },
  //       { name: "xyzas", age: 22 },
  //     ],
  //   });
  // };
  togglePersonHnadler = () =>{
    this.setState( {showPerson: !this.state.showPerson} )
  }
  render() {
    let persons = null;
    if(this.state.showPerson){
      persons = (
        <div>
          {this.state.Persons.map( person =>{
            return(
              <Person name={person.name} age={person.age} />
            )
          } ) }
        </div>
      )
    }else{
      persons = null
    }

    return (
      <div>
        <div className='container'>
          {/* <Person
            name={this.state.Persons[0].name}
            age={this.state.Persons[0].age}
            changed={(e) => this.switchNameHandler(e)}
          />
          <Person
            name={this.state.Persons[1].name}
            age={this.state.Persons[1].age}
          />
          <Person
            name={this.state.Persons[2].name}
            age={this.state.Persons[2].age}
          /> */}
          <br />
          <button
            onClick={(e) => this.onClickEventListner(e)}
            className='btn btn-success'>
            Switch Data
          </button>
          <br />
          <br />
          { persons }
          <div className='row'>
            <div className='col-xs-6'>
              <button
                onClick={this.togglePersonHnadler}
                className='btn btn-success'>
                Toggle Data
              </button>
            </div>
            <div className='col-xs-6'>
              <button className='btn btn-danger'>Switch data</button>
              {/* <button  onClick={this.togglePersonHnadler} className='btn btn-success'>Switch Data</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
