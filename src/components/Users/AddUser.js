import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
          setIsValid(true);
        }
        setEnteredValue(event.target.value);
      };

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
          }
    };

    return(
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input 
                    id='username' 
                    type='text'
                    onChange={goalInputChangeHandler}/>
                <label htmlFor='userage'>Age (Years)</label>
                <input id='age' type='number'/>
                <Button type='age'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;