import React, { useEffect, useState } from 'react'
import Appbar from '../components/Appbar';
import Balance from '../components/Balance';
import Users from '../components/Users';
import axios from 'axios';

const Dashboard = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/me")
      .then((response) => setUser(response.data))
  },[])
  console.log(user);

  return (
    <div>
      <Appbar />
      <div className="m-8">
        <div> dkfj</div>
        <Balance />
        <Users/>
      </div>
    </div>
  )
}

export default Dashboard;