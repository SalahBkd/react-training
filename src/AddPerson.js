import {Component} from "react";

class AddPerson extends Component {
    state = {
        name: null,
        email: null
    }

    handleChange = (e) => {
        this.setState({
            // here we are updating the right value of the element
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addPerson(this.state);
    }

    render() {
      return (
          <div>
              <form onSubmit={this.handleSubmit}>
                  <label htmlFor="name">Name: </label>
                  {/*the IDs are used handleChange() to update the state in one function*/}
                  <input type="text" id="name" onChange={this.handleChange}/>

                  <label htmlFor="email">Email: </label>
                  <input type="text" id="email" onChange={this.handleChange}/>

                  <button>Submit</button>
              </form>
          </div>
      );
    }
}

export default AddPerson;