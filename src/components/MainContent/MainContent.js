import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
  render() {
    const items = this.props.items.map((item, index) => (
      <li key={index}>{item}</li>
    ));

    return (
      <div>
        <h2>Основной контент</h2>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default MainContent;
