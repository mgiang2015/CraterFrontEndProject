import React from 'react';
import logo from '../resources/images/logo200x200.png';

class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <img src={logo} alt="Logo"/>
      <h1><i>/r/Dance: Where dancers unite</i></h1>
    </div>
    );
  }
}

export default Header;