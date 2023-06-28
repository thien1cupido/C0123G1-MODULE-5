import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import {UserList} from "./component/UserList";
import React from "react";
import {Provider} from "react-redux";
import store from "./redux/store";
import {UserHeader} from "./component/UserHeader";

function App() {
    return (
        <Provider store={store}>
            <UserHeader/>
            <UserList/>
        </Provider>
    );
}

export default App;
