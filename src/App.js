import {Component} from "react";
import Persons from "./Persons";
import AddPerson from "./AddPerson";

class App extends Component {
    state = {
        persons: [
            {id: 1, name: 'salahh', email: 'boukadi@gmail.com'},
            {id: 2, name: 'ousama', email: 'ousama@gmail.com'},
            {id: 3, name: 'yusuf', email: 'yusuf@gmail.com'}
        ]
    }

    componentDidMount() {
        console.log("component mounted !!");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component updated");
        console.log("prev props: ", prevProps);
        console.log("prev state: ", prevState);
        console.log("prev snapshot: ", snapshot);
    }

    addPerson = (person) => {
        person.id = Math.random();
        this.setState({
            persons: [...this.state.persons, person]
        });
        console.log(this.state.persons)
    }

    deletePerson = (personId) => {
        this.setState(prevState => ({
            persons: prevState.persons.filter(person => person.id !== personId)
        }))
    }

    render() {
        return (
            <div>
                <h2>Hello React !</h2>
                {/*passing addPerson() to the child component to be able to add the person in this.state*/}
                <AddPerson addPerson={this.addPerson}/>
                <Persons persons={this.state.persons} deletePerson={this.deletePerson}/>
            </div>
        );
    }
}

export default App;
