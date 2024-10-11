import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import AnotherComponent from './components/AnotherComponent/AnotherComponent';
import OrganiztionInfo from './components/OrganiztionInfo/OrganiztionInfo';




class App extends Component {
  render() {
    const companyName = "yes!";
    const items = ["Был контент", "Будет контент", "Нет контента"];
const companyAbout = "no yes!";
    return (
      <div className="App">
        <Header companyName={companyName}/>
        <MainContent items={items}/>
        <Sidebar />
        <OrganiztionInfo companyAbout={companyAbout}/>
        <AnotherComponent />
        <Footer />
      </div>
    );
  }
}

export default App;
