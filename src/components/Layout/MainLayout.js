import React, { Component } from 'react';
import Topbar from '../../containers/Topbar/Topbar';
import Header from '../../components/Header/Header';
import { Container } from 'reactstrap';
import Catalog from '../Header/Catalog';

const MainLayout = ({address, tweetSize,followSize, banner, picture, children }) => {
  
  return (
    <React.Fragment>
      <Topbar />
      <Header banner={banner} avatar={picture}>
        <Catalog address={address} tweetSize={tweetSize} followSize={followSize}/>
      </Header>
      <Container style={{ marginTop: '20px' }}>{children}</Container>
    </React.Fragment>
  );
};

export default MainLayout;
