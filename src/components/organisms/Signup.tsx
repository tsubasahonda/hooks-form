import * as React from 'react';
import useSignUpForm from '../../stores/CustomHooks';

const Signup = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm(); 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name</label>
        <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
        <label>Last Name</label>
        <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
      </div>
      <div>
        <label>Email Address</label>
        <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" onChange={handleInputChange} value={inputs.password1} name="password1" />
      </div>
      <div>
        <label>Re-enter Password</label>
        <input type="password" onChange={handleInputChange} value={inputs.passwrod2} name="password2" />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  )
}

export default Signup;
