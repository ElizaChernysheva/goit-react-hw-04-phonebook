import React from 'react';
import css from './ContactItem.module.css'
import PropTypes from 'prop-types';

const ContactItem = ({contact,removeItem}) =>{
  const{name,number,id}= contact;
  return(
    <li className={css.form__item}>
        <span>{name}:</span>
      <span>{number}</span>
      <button className={css.form__button} type='button' onClick={()=> removeItem(id)}>Delete</button>
    </li>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.object,
  removeItem:PropTypes.func.isRequired,
}

export default ContactItem;
