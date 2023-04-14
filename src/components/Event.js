import Button from './event/Button';

const Event = ({ number }) => {

  const myEvent = () => {
    console.log(`First event activated!`);
  }

  const secondEvent = () => {
    console.log(`Second event activated!`);
  }

  return (
    <div>
      <h1>Click to activate</h1>
      <Button event={myEvent}text="First event" />
      <Button event={secondEvent}text="Second event" />
    </div>
  );
}

export default Event;
