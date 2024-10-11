import React, { Component } from 'react';
import './OrganiztionInfo.css';

class OrganiztionInfo extends Component {
  render() {
    const { companyAbout } = this.props;
    return (
      <div className="extra-component">
        <h2>{companyAbout}</h2>
        <p>Наша организация занимается разработкой современных веб-приложений с использованием новейших технологий.</p>
      </div>
    );
  }
}

export default OrganiztionInfo;
