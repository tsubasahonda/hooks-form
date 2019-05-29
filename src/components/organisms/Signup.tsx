import * as React from 'react';
import useSignUpForm from '../../stores/CustomHooks';

const Signup = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          First Name
          <input type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
        </label>
        <label>
          Last Name
          <input type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
        </label>
      </div>
      <div>
        <label>
          Email Address
          <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" onChange={handleInputChange} value={inputs.password1} name="password1" />
        </label>
      </div>
      <div>
        <label>
          Re-enter Password
          <input type="password" onChange={handleInputChange} value={inputs.passwrod2} name="password2" />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
