import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getEmployees')
      .then(Employees => Employees.json())
      .then(Employees => {
        console.log(Employees)
        this.setState({
          Employees: Employees
        })
      })
  }


  render() {
    return (
      <div className="App contrainer">
        <div className="Text">
          <h1>Video Games</h1>
        </div>
        <div className="row">
          {this.state.Employees.map((Employee, index) => {
            return (
              <div class="card col-12 mb-4 p-2">
                <img src={Employee.image} class="mr-3" alt="..." />
                <div class="card-body">
                  <h5 class="card-text">{Employee.name}</h5>
                  {Employee.location}
                  <button>Click me</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;

