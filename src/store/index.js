import {createStore} from 'redux';
import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from "../constants";
import {configureStore, createSlice} from "@reduxjs/toolkit";


const initState = {counter: 0, showCounter: true};



const counterSlice = createSlice({
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
            state.counter += action.payload;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        },
        reset(state) {
            state.counter = 0;
        }
    }
});




const store = configureStore({
    reducer: counterSlice.reducer,
})


export const counterActions = counterSlice.actions;

export default store;


// const counterReducer = (state = initState, action) => {
//     if (action.type === INCREMENT) {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter,
//         }
//     }
//
//     if (action.type === DECREMENT) {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter,
//         }
//     }
//
//     if(action.type === INCREASE) {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter,
//         }
//     }
//
//     if (action.type === TOGGLE) {
//         return {
//             counter: state.counter,
//             showCounter: !state.showCounter,
//         };
//     }
//
//     if (action.type === 'RESET') {
//         return {
//             counter: 0,
//         };
//     }
//
//     return state;
// };
//

