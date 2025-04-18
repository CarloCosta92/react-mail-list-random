import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [mail, setMail] = useState([]);
  const endpoint = "https://flynn.boolean.careers/exercises/api/random/mail";

  useEffect(() => {
    const randomMails = [];

    function mailList() {
      for (let i = 0; i < 10; i++) {
        axios.get(endpoint)
          .then(response => {
            randomMails.push(response.data.response);
            console.log(response.data.response);

            // Aggiorno lo stato all'ultimo ciclo!!
            if (randomMails.length === 10) {
              setMail(randomMails);
            }
          })
      }
    }

    mailList();
  }, []);

  return (
    <div>
      <h1>Mail</h1>
      <ul>
        {mail.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
