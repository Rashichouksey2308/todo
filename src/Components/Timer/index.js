import React, { useState, useEffect } from 'react';
import './style.css'

function Timer({ timer, onDelete }) {
  const [remainingTime, setRemainingTime] = useState(timer.duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(remainingTime => Math.max(remainingTime - 10, 0));
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      onDelete(timer);
    }
  }, [remainingTime, onDelete, timer]);

  return (
    <div className="timer">
         <h3>Created at: </h3>
      <div> {timer.createdAt.toLocaleString()}</div>
       <h3>Remaining time: </h3>
      <div>{Math.floor(remainingTime / 10)}.{remainingTime % 10}</div>
      <button onClick={() => onDelete(timer)}>Delete</button>
    </div>
  );
}

function TimerForm({ onCreate }) {
  const [duration, setDuration] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(parseInt(duration));
    setDuration('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Duration (in seconds):
        <input type="number" value={duration} onChange={(event) => setDuration(event.target.value)} />
      </label>
      <button type="submit">Create Timer</button>
    </form>
  );
}

function Timerlist() {
    const [timers, setTimers] = useState([]);

  const handleTimerCreate = (duration) => {
    const createdAt = new Date();
    const timer = {
      createdAt,
      duration,
    };
    setTimers([...timers, timer]);
  };

  const handleTimerDelete = (timer) => {
    setTimers(timers.filter((t) => t !== timer));
  };
  return (
    <div className="app">
    <div className="left">
      {timers.map((timer) => (
        <Timer key={timer.createdAt.getTime()} timer={timer} onDelete={handleTimerDelete} />
      ))}
    </div>
    <div className="right">
      <TimerForm onCreate={handleTimerCreate} />
    </div>
  </div>  )
}

export default Timerlist