import React from 'react';
import css from './ContactList.module.css'
import ContactItem from './ContactItem/ContactItem';
import PropTypes from 'prop-types';

const ContactList = ({contacts,filter,removeItem}) =>{
  let filteredArr = contacts.filter(contact => contact.name.toLowerCase().includes(filter))

  return(
  <ul className={css.contactList}>
    {filteredArr.map(contact => <ContactItem key ={contact.id} contact={contact} removeItem={removeItem}/>)}
  </ul>
)
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter:PropTypes.string.isRequired,
  removeItem:PropTypes.func.isRequired,
}

export default ContactList;
