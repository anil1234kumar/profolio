import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../../reduxpractice/counter/counterSlice";
import { increment, decrement } from "../../reduxpractice/counter/counterSlice";
import { Pokemon } from "./Pokemon";
import AllPokemon from "./AllPokemon";
import { Flower } from "./Flower";
import GetMachine from "./GetMachine";

const pokemon = ["bulbasaur", "pikachu", "ditto", "bulbasaur"];

const ReduxToolLearning = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <Pokemon />
      {/* <AllPokemon />
      <GetMachine /> */}
      {/* <Flower /> */}
    </>
  );
};

export default ReduxToolLearning;
