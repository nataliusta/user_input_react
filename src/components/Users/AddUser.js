import React from 'react';

import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault(); 
    };

    return(
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username'>Username</label>
                <input id='username' type='text'/>
                <label htmlFor='userage'>Age (Years)</label>
                <input id='age' type='number'/>
                <Button type='age'>Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;