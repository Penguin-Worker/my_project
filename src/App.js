import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';



class App extends Component {
  render() {
    const companyName = "Моя Организация";
    const items = ["Элемент 1", "Элемент 2", "Элемент 3"];

    return (
      <div className="App">
        <Header companyName={companyName} />
        <MainContent items={items} />
        <Footer />
      </div>
    );
  }
}

export default App;
