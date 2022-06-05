import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const jobs = await response.json();
    setJobs(jobs);
    setIsLoading(false);
    console.log(jobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return <h2>tabs project setup</h2>;
}

export default App;
