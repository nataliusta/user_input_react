import React, { useState } from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredValue.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
          props.onAddUser(enteredValue, enteredAge);
          setEnteredValue('');
          setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredValue(event.target.value);
      };

    const addAgeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    return(
        <div>
            <ErrorModal title='An error occured!' message='Something went wrong!' />
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>Username</label>
                    <input 
                        id='username' 
                        type='text'
                        value={enteredValue} // ?
                        onChange={usernameChangeHandler}/>
                    <label htmlFor='userage'>Age (Years)</label>
                    <input 
                        id='age' 
                        type='number'
                        value={enteredAge}
                        onChange={addAgeHandler}/>
                    <Button type='age'>Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;