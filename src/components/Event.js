const Event = () => {

  const myEvent = () => {
    console.log('Event activated!');
  }
  
  return (
    <div>
      <h1>Click to activate</h1>
      <button onClick={myEvent}>Activate!</button>
    </div>
  );
}

export default Event;
