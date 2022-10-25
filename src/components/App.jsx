import { useState,useEffect,useRef } from "react";
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid'

const App = () => {
  const [contacts, setContacts] = useState(
      [
    {id: nanoid(), name: 'Rosie Simpson', number: '459-12-56'},
    {id: nanoid(), name: 'Hermione Kline', number: '443-89-12'},
      ]
  );

  const [filter,setFilter] = useState('')

  const firstRender = useRef(true);

  useEffect(()=>{
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      setContacts(contacts);
    }
  },[])

  useEffect(()=>{
    if(!firstRender.current){
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }else{

      firstRender.current = false;
    }
  },[contacts])

  const handleOnSubmit = ({ name,number }) => {

    if(contacts.some(el => el.name === name)){
      alert(`${name} is already in contacts`)
      return
    }

    const contact ={
      id: nanoid(),
      name,
      number,
    }

    setContacts(contacts => [contact, ...contacts]);
  }

  const handleOnFilterChange =({ target }) =>{
    const valueToLowerCase = target.value.toLowerCase().trim();
    setFilter(valueToLowerCase)
  }

  const removeContact = (id) =>{
    setContacts((contacts => contacts.filter(contact => contact.id !== id)))
  }

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={handleOnSubmit}/>
        <h2>Contacts</h2>
        <Filter onFilterChange={handleOnFilterChange} filter={filter}/>
        <ContactList contacts={contacts} filter={filter} removeItem={removeContact}/>
      </div>
    );
};


export default App;
