import React, {useState, useEffect} from 'react'
import useAuth from '../../../hooks/useAuth'
import Global from '../../../helpers/Global';
import axios from 'axios';

export const MarbustEducation = () => {
  const {auth} = useAuth();

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${Global.url}/marbust-education/courses`, {
        });
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='dashboard__home'>
      <h1>Marbust Education</h1>
      <hr />
      {auth && auth.firstName && auth.lastName && (<h5>{auth.firstName + ' ' + auth.lastName}</h5>)}
        <hr/>
        <h2>Cursos Disponibles</h2>
        <ol className='update-list'>
        {courses.map(course => (
          <li key={course.id} className="update-item">
          <div className="update-title">{course.name}:</div>
          <div className="update-date">Fecha: <strong>{course.publishedDate}</strong></div>
          <br />
          <div className="update-description">{course.category}</div>
        </li>
        ))}
      </ol>
      </div>
  )
}
