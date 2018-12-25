import React, { Component } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Header from '../../components/Header/Header';
import { Container } from 'reactstrap';
import Catalog from '../Header/Catalog';
const thumb =
  'https://i2.wp.com/futbolita.com/wp-content/uploads/2008/11/avatar-1577909_960_720.png?fit=720%2C720';

const MainLayout = ({ name, banner, picture = thumb, children }) => {
  return (
    <React.Fragment>
      <Topbar name={name} thumb={picture} />
      <Header banner={banner} avatar={picture}>
        <Catalog />
      </Header>
      <Container style={{ marginTop: '20px' }}>{children}</Container>
    </React.Fragment>
  );
};

export default MainLayout;
