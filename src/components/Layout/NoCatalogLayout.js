import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { Container } from 'reactstrap';
import Topbar from '../../containers/Topbar/Topbar';

const thumb =
  'https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720';
  
const NoCatalogLayout = ({address, name, banner, picture = thumb, children}) => {
  return (
    <React.Fragment>
      <Topbar />
      <Header banner={banner} avatar={picture} />
      <Container style={{ marginTop: '20px' }}>{children}</Container>
    </React.Fragment>
  );
};

export default NoCatalogLayout;
