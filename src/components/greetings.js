import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greeting';

const Greeting = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.greetingReducer);
  let message = '';

  if (status != null) {
    message = status;
  } else {
    message = 'helloo';
  }

  return (
    <div className="greetings">
      <h1>{message}</h1>
      <button onClick={() => dispatch(getGreeting())} type="button">Generate new greeting</button>
    </div>
  );
};

export default Greeting;
