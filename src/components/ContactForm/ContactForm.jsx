import { useState } from "react";
import css from './ContactForm.module.css'


const ContactForm = ({onSubmitForm}) => {
    const [state,setState] = useState({name:'', number: '',})


const handleOnChange = ({target}) => {
   const {name,value} = target;

   setState(prevState => ({...prevState,[name]:value}))
  }

const handleOnSubmit = (event) =>{
    event.preventDefault()
    onSubmitForm({...state})
    setState({
        name: '',
        number: '',
    });
  }

    return(
      <form className={css.form} onSubmit={handleOnSubmit}>
        <label className={css.form__label}>
          Name
          <input
               className={css.form__input}
               type="text"
               name="name"
               value={state.name}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
               onChange={handleOnChange}
          />
        </label>
        <label className={css.form__label}>
          Number
          <input
              className={css.form__input}
              type="tel"
              name="number"
              value={state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleOnChange}
          />
        </label>
        <button className={css.form__btn} type='submit'>Add contact</button>
      </form>
    )
}


export default  ContactForm;
