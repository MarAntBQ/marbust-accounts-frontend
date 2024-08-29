import React, {useState, useEffect} from 'react'
import useAuth from '../../../hooks/useAuth'
import Global from '../../../helpers/Global';
import axios from 'axios';

export const Home = () => {
  const {auth} = useAuth();

  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const response = await axios.get(`${Global.url}/system-updates/view-all`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUpdates(response.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchUpdates();
  }, []);

  return (
    <div className='dashboard__home'>
      <h1>Bienvenido/a  a Marbust Accounts&reg; 2.5.0</h1>
      <hr />
      {auth && auth.firstName && auth.lastName && (<h5>{auth.firstName + ' ' + auth.lastName}</h5>)}
        <hr/>
        <h2>Actualizaciones del sistema</h2>
        <ol className='update-list'>
        {updates.map(update => (
          <li key={update.id} className="update-item">
          <div className="update-title">{update.title}:</div>
          <div className="update-date">Fecha: <strong>{update.date}</strong></div>
          <br />
          <div className="update-description">{update.description}</div>
          <div className="update-date">Reportado por: {update.createdBy}</div>
        </li>
        ))}
      </ol>
      </div>
  )
}
