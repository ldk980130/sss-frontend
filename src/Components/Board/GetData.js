import axios from 'axios';
import React, { useEffect, useState } from 'react';

const GetData = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      console.log(res);
      setPersons(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {persons.map(person => (<li key={person.id}>{person.name}&emsp;&emsp;&emsp;&emsp;&emsp; {person.username}</li>))}
      </ul>
    </div>
  );
};

export default GetData;