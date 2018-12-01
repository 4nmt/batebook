import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import FollowLayout from "../../components/Layout/FollowLayout";
import ChangeAccount from "../../components/ChangeAccount/ChangeAccount";

class AccountPage extends Component {
  render() {
    return (
      <FollowLayout>
        <ChangeAccount />
      </FollowLayout>
    );
  }
}

export default AccountPage;
