import React, { useState } from 'react';
import './signup.css'
import { createAuthUserWithEmailAndPassword} from './utils/firebase'
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
    const [contact, setcontact] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = contact
    console.log(contact)
    async function handleClick(event) {
        console.log("clicked")
        if (password !== confirmPassword) {
            alert('password do not match')
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            //await createuserdocfromAuth(user, { displayName })
            alert("SignUp Successful")
            navigate('/login')
            console.log(user)
        }
        catch (error) {
          alert("signup failed")
            console.log('error in creation', error.message)
        }
    }
    function handlepass(event) {
        const value = event.target.value
        const name = event.target.name

        setcontact((prevalue) => {
            return {
                ...prevalue,
                [name]: value

            }
        })

    }
    return (
    <div className="signup-container">
      <h1>Create a DEV@Deakin Account</h1>
      <div className="input-group">
        <label htmlFor="name">Name</label>
        <input
        name = 'displayName'
        type='text'
        placeholder='name'
        onChange ={handlepass}
      />
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <input
        name = 'email'
        type='email'
        placeholder='email'
        onChange ={handlepass}
      />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
        name= 'password'
        type='password'
        placeholder='password'
        onChange ={handlepass}
        />
      </div>
      <div className="input-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
        name= 'confirmPassword'
        type='password'
        placeholder='confirmPassword'
        onChange ={handlepass}
        />
      </div>
      <button onClick={handleClick} className="create-button">
        Create
        </button>
    </div>
  );
}


export default Signup