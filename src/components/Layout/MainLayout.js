import React, { Component } from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Header from '../../components/Header/Header';
import { Container } from 'reactstrap';
import Catalog from '../Header/Catalog';

const MainLayout = ({ name, banner, picture, children }) => {
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
