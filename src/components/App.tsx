import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import CardHolder from "@/assets/cardHoldre.jpg";
import Povar from "@/assets/povar.svg";

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const decrement = () => {
    setCount((count) => count - 1);
  };

  // if (__PLATFORM__ === "mobile") {
  //   return <div>Is Mobile Platform</div>;
  // }

  // if (__PLATFORM__ === "desktop") {
  //   return <div>Is Desktop Platform</div>;
  // }

  return (
    <div>
      <h1 data-testid={"App.DataTestId"}>{__PLATFORM__}</h1>
      <div>
        <img src={CardHolder} alt="cardHolder" />
      </div>
      <div>
        <Povar fill={"blue"} width={50} height={50} />
      </div>
      <Link to="/about">about</Link>
      <Link to="/shop">shop</Link>
      <button className={classes.button} onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
      <div>{count}</div>
      <Outlet />
    </div>
  );
};
