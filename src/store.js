import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import skillsReducer from "./reducers/skillsReducer";


const reducers = combineReducers({
    skillsReducer
})

const store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)


export default store
