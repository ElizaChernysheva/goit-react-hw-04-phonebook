import React from 'react';
import css from './Filter.module.css'
import PropTypes from 'prop-types';


const Filter = ({onFilterChange,filter}) =>{
  return(
    <div className={css.form__wrapper}>
      <label className={css.form__filter}>
        Find contacts by name
        <input className={css.form__input}
               type='text'
               name='filter'
               value={filter}
               onChange={onFilterChange}
        />
      </label>
    </div>

  )
}

Filter.propTypes ={
  onFilterChange:PropTypes.func.isRequired,
}

export default Filter;
