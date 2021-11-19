const Persons = ({persons, deletePerson}) => {

    const personsList = persons.map(person => (
        <div key={person.id}>
            <p>{person.name}</p>
            <p>{person.email}</p>
            <button onClick={() => (deletePerson(person.id))}>Delete</button>

            {/*THIS WILL INVOKE THE FUNCTION, notice () WE DONT WANT THAT*/}
            {/*<button onClick={deletePerson(person.id)}>Delete</button>*/}

        </div>
    ));

    return (
     <div>
         { personsList }
     </div>
    )

}

export default Persons;