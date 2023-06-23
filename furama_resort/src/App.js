import './App.css';
import {Header} from "./component/header-footer/Header";
import React from "react";
import {TypeRoom} from "./component/type-room/TypeRoom";
import 'bootstrap/dist/js/bootstrap'
import {Footer} from "./component/header-footer/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <TypeRoom/>
      <Footer/>
    </div>
  );
}

export default App;
