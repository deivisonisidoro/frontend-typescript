import React, { useEffect, useState } from 'react';
import User from './components/User';
import api from './services/api'

interface IUser{
  name: string;
  email: string;
}
function App() {
  const [user, setUser] = useState<IUser[]>([]);
  useEffect(()=>{
    api.get<IUser[]>('/users').then(response => {
      setUser(response.data);
    })
  },[])
  return (
    <div className="App">
      {user.map(user=> <User key={user.email} user={user}/>)}
    </div>
  );
}

export default App;
