import React from 'react';
import Text from './components/text';
import Button from './components/SignInUpButton';
import './Nav.css'; // Import the CSS file

const Nav = () => {
  return (
    <div className="Nav">
      <div className="NavContent">
        <Text />
      </div>
      <div className="ButtonContainer">
      <Button customColor={false} customLabel="Sign In" />
      </div>
      <div className="SignUpButtonContainer">
      <Button customColor={true} customLabel="Sign Up" />
      </div>
    </div>
  );
};

export default Nav;
