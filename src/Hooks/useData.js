import { useEffect, useState } from 'react';

const useData = () => {
  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    fetch("https://portfolio-server-823q.onrender.com/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProjects(data);
      });
  },[])
  return [projects];
};

export default useData;