import React from "react";
import Nav from "../components/Private/Nav/index";
import GetStarted from "../components/Private/HomePrivate/GetStarted";
import DoINeedDPO from "../components/Private/HomePrivate/DoINeedDPO";

function home() {
  return (
    <div>
      <Nav />
      <GetStarted />
      <DoINeedDPO />
    </div>
  );
}

export default home;
