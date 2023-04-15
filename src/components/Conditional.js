import { useState } from 'react';

const Conditional = () => {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  const sendEmail = (e) => {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }

  const cleanEmail = () => {
    setUserEmail('');
  }

  return (
    <div>
      <h2>Register e-mail</h2>
      <form>

        <input type="email" placeholder="Input e-mail..." onChange={ (e) => setEmail(e.target.value) } />

        <button type="submit" onClick={sendEmail}>
          Send e-mail
        </button>

        {userEmail && (
          <div>
            <p>User e-mail is: {userEmail}</p>
            <button onClick={cleanEmail}>Clean e-mail</button>
          </div>
        )}

      </form>
    </div>
  );
}

export default Conditional;
