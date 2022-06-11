import { useEffect, useState } from 'react';

const useData = () => {
  const [projects,setProjects]=useState([]);
  useEffect(()=>{
    fetch("https://arcane-depths-60174.herokuapp.com/projects")
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setProjects(data);
    })
  },[])
  return [projects];
};

export default useData;