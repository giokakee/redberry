import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import skillsReducer from "./reducers/skillsReducer";
import validReducer from "./reducers/validReducer";

const reducers = combineReducers({
    skillsReducer, validReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store
