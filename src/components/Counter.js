import classes from './Counter.module.css';
import {useDispatch, useSelector, connect} from "react-redux";
import {Component, useState} from "react";
import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from "../constants";

import {counterActions} from "../store/index";

const Counter = () => {

    const dispatch = useDispatch();

    const counter = useSelector((state) => state.counter);
    const showCounter = useSelector((state) => state.showCounter);

    const [inputValue, setInputValue] = useState('');

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
    };

    const incrementCounterHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementCounterHandler = () => {
        dispatch(counterActions.decrement());
    }

    const increaseCounterHandler = () => {
        const amount = parseInt(inputValue, 10); // Convert input to a number
        if(!isNaN(amount)) {
            dispatch(counterActions.increase(amount));
            setInputValue(''); // Clear the input field after dispatching
        } else {
            alert('Please enter a valid number');
        }
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementCounterHandler}>Increment</button>
                <button onClick={decrementCounterHandler}>Decrement</button>
            </div>
            <div style={{
                gap: '10px'
            }}>
                <input style={{
                    width: '120px',
                }}
                        type='text'
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}
                       placeholder='Input Value'
                />
                <button onClick={increaseCounterHandler}>Increase by {inputValue}</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
}


// class Counter extends Component {
//     incrementCounterHandler = () => {
//         this.props.increment();
//     };
//
//     decrementCounterHandler = () => {
//         this.props.decrement();
//     };
//
//     increaseCounterHandler = () => {
//
//     }
//
//     toggleCounterHandler = () => {
//         this.props.reset();
//     };
//
//     render() {
//         return (<main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                 <button onClick={this.incrementCounterHandler}>Increment</button>
//                 <button onClick={this.decrementCounterHandler}>Decrement</button>
//             </div>
//             <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//         </main>);
//     }
// }
//
//
//
// // Map Redux state to props
// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };
//
// // Map Redux actions to props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({type: "INCREMENT"}),
//         decrement: () => dispatch({type: "DECREMENT"}),
//         reset: () => dispatch({type: "RESET"}),
//     };
// };
//
// // Connect Redux to the component
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//

export default Counter;