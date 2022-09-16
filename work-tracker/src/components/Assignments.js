import React,{useEffect, useState} from 'react'


function Assignments() {

  const [assignments, setAssignments] = useState ([])


  useEffect(() => {
    fetch("http://localhost:9292/assignments")
    .then((response) => response.json())
    .then((data) =>{
      setAssignments(data)
      console.log(data)
    })
  },[]);


  return (
    <div className='air'>
      <div className='container'>
        <div className='content'>
        </div>
        {assignments.map((assignment) => (
          <ol id={assignment.id} key={assignment.id} >
            <p>Name: {assignment.name}</p>
            <p>slug: {assignment.slug}</p>
          </ol>

        ))}
      </div>


    </div>
  )
}

export default Assignments;
