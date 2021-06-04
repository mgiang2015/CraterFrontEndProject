import React from 'react';
import logo from '../resources/images/dota2.png';

class Header extends React.Component {
  render() {
    return (
    <div className="header">
      <img className="logo" src={logo} alt="Logo"/>
      <h1><i>/r/DotA2</i></h1>
    </div>
    );
  }
}

export default Header;