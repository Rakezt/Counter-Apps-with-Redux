import { applyMiddleware, createStore } from "redux";
import CounterReducer from "./CounterReducer";
import loggerMiddleware from "./LoggerMiddleware";

const store = createStore(CounterReducer, applyMiddleware(loggerMiddleware));
export default store;
