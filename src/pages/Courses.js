import { useEffect, useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import UserContext from '../context/UserContext';
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';

export default function Courses() {

    const { user } = useContext(UserContext);
    const [courses, setCourses] = useState([]);

    const fetchData = () => {
        const fetchUrl = user.isAdmin 
            ? "http://localhost:4000/courses/all" 
            : "http://localhost:4000/courses/";

        fetch(fetchUrl, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setCourses(data);
        });
    };

    useEffect(() => {
        fetchData();
    }, [user]);

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(to right, #ece9e6, #ffffff)',
            paddingTop: '60px',
            paddingBottom: '60px'
        }}>
            <Container>
                <div className="text-center mb-5">
                    <h1 className="fw-bold text-primary">Explore Our Courses</h1>
                    <p className="text-muted fs-5">
                        Whether you're starting out or advancing your career, we have the right course for you.
                    </p>
                </div>

                {
                    user.isAdmin
                        ? <AdminView coursesData={courses} fetchData={fetchData} />
                        : <UserView coursesData={courses} />
                }
            </Container>
        </div>
    );
}
