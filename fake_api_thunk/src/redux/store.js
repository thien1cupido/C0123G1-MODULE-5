import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducer";

const initialStore = {}
const milddleWare = [thunk]
const store = createStore(
    rootReducer,
    initialStore,
    applyMiddleware(...milddleWare)
)
export default store;