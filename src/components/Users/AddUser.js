import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(true);

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
          }
          console.log(enteredValue, enteredAge);
    };

    const usernameChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
          setIsValid(true);
        }
        setEnteredValue(event.target.value);
      };

    const addAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input 
                    id='username' 
                    type='text'
                    onChange={usernameChangeHandler}/>
                <label htmlFor='userage'>Age (Years)</label>
                <input 
                    id='age' 
                    type='number'
                    onChange={addAgeHandler}/>
                <Button type='age'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;