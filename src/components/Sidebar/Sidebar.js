import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <aside className="sidebar">
        <h2>Боковая панель</h2>
        <ul>
          <li><a href="#section1">Раздел 1</a></li>
          <li><a href="#section2">Раздел 2</a></li>
          <li><a href="#section3">Раздел 3</a></li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
