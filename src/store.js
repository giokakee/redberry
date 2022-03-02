import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { testReducer } from "./reducers/testReducer";

const store = createStore(
    testReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store
