// import React,{useEffect, useState} from 'react'


// function Assignments() {

//   const [assignments, setAssignments] = useState ([])


//   useEffect(() => {
//     fetch("http://localhost:9292/assignments")
//     .then((response) => response.json())
//     .then((data) =>{
//       setAssignments(data)
//       console.log(data)
//     })
//   },[]);


//   return (
//     <div className='air'>
//       <div className='container'>
//         <div className='content'>
//         </div>
//         {assignments.map((assignment) => (
//           <ol id={assignment.id} key={assignment.id} >
//             <p>Name: {assignment.name}</p>

//           </ol>

//         ))}
//       </div>


//     </div>
//   )
// }

// export default Assignments;
// title: params[:title],
//      body: params[:body],
//      authors_id: params[:authors_id],
//      categories_id: params[:categories_id]

import React, { useState } from 'react';

const assignmentAPI = "http://localhost:9292/assignments";

function Assignments({assignment, removeAssignment}) {
  const {title, body, categories_id, authors_id} = assignment;
  const [isRead, setIsRead] = useState(false)

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${assignmentAPI}/${assignment.id}`, {
      method: "DELETE",
    });
    removeAssignment(assignment);
  }

  return (
    <div className="">
      <h3>{title}</h3>
      {/* <p>{categories_id}</p> */}
      <p>{body}</p>
      <p>
        <strong>- By {authors_id}</strong>
      </p>
      <button onClick={onDeleteClick} >
        Delete
      </button>
      <br></br>

    </div>
  );
}

export default Assignments;
