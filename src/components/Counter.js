import classes from './Counter.module.css';
import {useDispatch, useSelector, connect} from "react-redux";
import {Component} from "react";

// const Counter = () => {
//
//     const dispatch = useDispatch();
//
//     const counter = useSelector((state) => state.counter);
//     const toggleCounterHandler = () => {
//
//     };
//
//     const incrementCounterHandler = () => {
//         dispatch({type: 'INCREMENT'});
//     }
//
//     const decrementCounterHandler = () => {
//         dispatch({type: 'DECREMENT'});
//     }
//
//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{counter}</div>
//             <div>
//                 <button onClick={incrementCounterHandler}>Increment</button>
//                 <button onClick={decrementCounterHandler}>Decrement</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// }



class Counter extends Component {
    incrementCounterHandler = () => {
        this.props.increment();
    };

    decrementCounterHandler = () => {
        this.props.decrement();
    };

    toggleCounterHandler = () => {
        this.props.reset();
    };

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counter}</div>
                <div>
                    <button onClick={this.incrementCounterHandler}>Increment</button>
                    <button onClick={this.decrementCounterHandler}>Decrement</button>
                </div>
                <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
            </main>
        );
    }
}

// Map Redux state to props
const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    };
};

// Map Redux actions to props
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "INCREMENT" }),
        decrement: () => dispatch({ type: "DECREMENT" }),
        reset: () => dispatch({ type: "RESET" }),
    };
};

// Connect Redux to the component
export default connect(mapStateToProps, mapDispatchToProps)(Counter);

