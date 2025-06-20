import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
// load/import the BrowserRouter, Route and Routes from the react-router-dom package
// BrowserRouter - enables us to simulate page navigation by synchronizing the shown content and shown url in the browser
// as keyword - to reassign a variable name
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// load/import the AppNavbar() function from the components/AppNavbar.js
import AppNavbar from './components/AppNavbar';
// import Banner from './components/Banner';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';
import News from './pages/News';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Error from './pages/Error';
import Profile from './pages/Profile';
import CourseView from './pages/CourseView';
import AddCourse from './pages/AddCourse';
import { UserProvider } from './context/UserContext';

// App can be considered as our Mother component
function App() {
    
    // state hook for the user state for global scope
    const [user, setUser] = useState({
        id: null,
        isAdmin: null
    });

    // function for clearing the local storage
    function unsetUser() {
        localStorage.clear();
    }

    useEffect(() => {
        console.log(user);
        console.log(localStorage);
    }, [user]);

    useEffect(() => {

        if(localStorage.getItem('token') !== null) {

            fetch('http://localhost:4000/users/details', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            .then(res => res.json())
            .then(data => {
                setUser({
                    id: data._id,
                    isAdmin: data.isAdmin
                })
            })
            
        } else {
            setUser({
                id: null,
                isAdmin: null
            })
        }
        
    }, [])

    return (
        // With react jsx, we use "className" attribute to add bootstrap css
        // <> </> - JSX Fragments are components that prevents error when multiple components are rendered in react. In simpler terms, they are used to group together components
        // We wrapped all the components to set which will have access to the UserContext
        // "value" property contains the information to be stored in the context object "UserContext"
        <UserProvider value={{ user, setUser, unsetUser }}>
        <Router>
            {/*<h1>Hello World</h1>*/}
            <AppNavbar />
            <Container>
                {/* Routes - is simply the component that contain all individual routes */}
                <Routes>
                    {/* Route component is the individual route that contains the url and element to be rendered in the page */}
                    {/* path attribute - URL endpoint to access */}
                    {/* element attribute - the component to be rendered when the path is accessed */}
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/addCourse" element={<AddCourse />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} /> 
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* :courseId  will act as a wildcard that will contain the course id from the CourseCard component */}
                    <Route path="/courses/:courseId" element={<CourseView />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Container>
        </Router>
        </UserProvider>
    );
}

export default App;