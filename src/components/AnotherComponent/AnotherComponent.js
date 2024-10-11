import React, { Component } from 'react';
import './AnotherComponent.css';

class AnotherComponent extends Component {
  render() {
    return (
      <div className="another-extra-component">
        <h2>Контакты</h2>
        <p>Вы можете связаться с нами по электронной почте: example@example.com</p>
        <p>Или по телефону: +xxx xxx xxx</p>
      </div>
    );
  }
}

export default AnotherComponent;
