import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>Заголовок приложения</h1>
        <h2>Название организации: {this.props.companyName}</h2>
      </header>
    );
  }
}

export default Header;
