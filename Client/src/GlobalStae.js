import { createStore } from "redux"

import allReducers from "./GlobalStore/reducers/index"

const tourAppData = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default tourAppData