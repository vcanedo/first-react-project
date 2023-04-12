// show me the basic structure of a react component
import Phrase from './Phrase';

const HelloWorld = (props) => {
  return (
    <div>
      <Phrase />
      <h1>Hello World!</h1>
      <Phrase />
    </div>
  );
}

export default HelloWorld;

// Path: src/index.js
