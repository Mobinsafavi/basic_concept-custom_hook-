import useCounter from "../hooks/UseCounter";
import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(true);
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
