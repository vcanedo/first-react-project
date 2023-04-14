import { useState } from 'react';

const Form = () => {

  const loginUser = (e) => {
    e.preventDefault();
    // if name is empty, alert user to input name otherwise it will send the name to the console
    if (name === '' || password === '') {
      alert('Please input your name and password');
      return;
    } else {
      console.log(name);
      console.log(`${name} is logged in with password ${password}`);
    }

  }

  const [name, setName] = useState('Victor');
  const [password, setPassword] = useState('123');


  return (
    <div>
      <form onSubmit={loginUser}>
        <div>
          <h1>Login</h1>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="input your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="input your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div>
          <input type="submit" value="Login"/>
        </div>
      </form>
    </div>
  );

}

export default Form
