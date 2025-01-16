import {createStore} from 'redux';
import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from "../constants";
import {createSlice} from "@reduxjs/toolkit";


const initState = {counter: 0, showCounter: true};



createSlice({
    name: "counter",
    initialState: initState,
    reducers: {
        increment(state){
            state.counter += 1; //imgur package makes it mutable
        },
        decrement(state){
            state.counter -= 1;
        },
        increase(state, action){
            state.counter += action.amount;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})
const counterReducer = (state = initState, action) => {
    if (action.type === INCREMENT) {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        }
    }

    if (action.type === DECREMENT) {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        }
    }

    if(action.type === INCREASE) {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        }
    }

    if (action.type === TOGGLE) {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    }

    if (action.type === 'RESET') {
        return {
            counter: 0,
        };
    }

    return state;
};


const store = createStore(counterReducer);

export default store;