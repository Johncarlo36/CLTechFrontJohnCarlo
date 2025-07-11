import React, { useState } from 'react';
import CourseCard from './CourseCard';

const CourseSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch('http://localhost:4000/courses/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: searchQuery })
      });
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching for courses:', error);
    }
  };

  return (
    <div>
      <h2>Course Search</h2>
      <div className="form-group">
        <label htmlFor="courseName">Course Name:</label>
        <input
          type="text"
          id="courseName"
          className="form-control"
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
        />
      </div>
      <button className="btn btn-primary my-3" onClick={handleSearch}>Search</button>
      
      <h3>Search Results:</h3>
      {
        searchResults.map(course => <CourseCard courseProp={course} key={course._id} />)
      }
    </div>
  );
};

export default CourseSearch;
