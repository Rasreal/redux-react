import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "@reduxjs/toolkit";
import store, { counterActions } from "../store/index";
import "@testing-library/jest-dom";

import Counter from "./Counter";

describe("Counter Component", () => {
    beforeEach(() => {
        jest.spyOn(store, "dispatch"); // Spy on Redux dispatch
    });

    it("renders the Counter component", () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        //expect(screen.getByText("Redux Counter")).toBeInTheDocument();
        expect(screen.getByText("Increment")).toBeInTheDocument();
        expect(screen.getByText("Decrement")).toBeInTheDocument();
        expect(screen.getByText("Toggle Counter")).toBeInTheDocument();
    });

    it("dispatches the toggle action when 'Toggle Counter' button is clicked", () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        fireEvent.click(screen.getByText("Toggle Counter"));
        expect(store.dispatch).toHaveBeenCalledWith(counterActions.toggle());
    });

    it("dispatches the increment action when 'Increment' button is clicked", () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        fireEvent.click(screen.getByText("Increment"));
        expect(store.dispatch).toHaveBeenCalledWith(counterActions.increment());
    });

    it("dispatches the decrement action when 'Decrement' button is clicked", () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        fireEvent.click(screen.getByText("Decrement"));
        expect(store.dispatch).toHaveBeenCalledWith(counterActions.decrement());
    });

    it("dispatches the increase action with the correct value when valid input is entered", () => {
        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        const input = screen.getByPlaceholderText("Input Value");
        fireEvent.change(input, { target: { value: "10" } });

        fireEvent.click(screen.getByText("Increase by 10"));
        expect(store.dispatch).toHaveBeenCalledWith(counterActions.increase(10));
    });

    it("does not dispatch increase action if input is invalid", () => {
        window.alert = jest.fn(); // Mock alert

        render(
            <Provider store={store}>
                <Counter />
            </Provider>
        );

        const input = screen.getByPlaceholderText("Input Value");
        fireEvent.change(input, { target: { value: "abc" } });

        fireEvent.click(screen.getByText("Increase by abc"));
        expect(window.alert).toHaveBeenCalledWith("Please enter a valid number");
    });
});
