import React, { Component } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";
import FollowLayout from "../../components/Layout/FollowLayout";
import FollowCard from "../../components/FollowCard/FollowCard";

class FollowingPage extends Component {
  render() {
    return (
      <FollowLayout>
        <div className="d-flex flex-row bd-highlight mb-3 ">
          <FollowCard />
          <FollowCard />
          <FollowCard />
        </div>
      </FollowLayout>
    );
  }
}

export default FollowingPage;
