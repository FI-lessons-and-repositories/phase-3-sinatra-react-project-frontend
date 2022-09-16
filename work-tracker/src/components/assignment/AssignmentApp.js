import React, { useState, useEffect } from 'react';
import Assignmentcontainer from "./Assignmentcontainer";
import Newassignment from "./Newassignment";

const assignmentAPI = "http://localhost:9292/assignments";

function AssignmentApp() {
  const [assignments, setAssignments] = useState([]);

  const [formVisible, setFormVisible] = useState(true);

  const [favoriteVisible, setFavoriteVisible] = useState(true);

  const assignmentsToDisplay = assignments.filter((assignment) => favoriteVisible || assignment.isFavorite);

  useEffect(() => {
    fetch(assignmentAPI)
      .then(res => res.json())
      .then(data => setAssignments(data))
  }, []);

  function addAssignment(newAssignment) {
    setAssignments([...assignments, newAssignment]);
  }

  function removeAssignment(assignmentToRemove) {
    setAssignments(assignments.filter(assignment => assignment.id !== assignmentToRemove.id))
  }

  function renderAssignmentView() {
    if (assignmentsToDisplay.length === 0 && !favoriteVisible) {
      return (<h1>You have no favorites added</h1>)
    } else {
      return (
        <Assignmentcontainer
          assignments={assignmentsToDisplay}
          removeAssignment={removeAssignment}
        />
      )
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <button
          onClick={() => setFormVisible(!formVisible)} >
          Show/hide new assignment form
        </button>
        {formVisible ? <Newassignment addAssignment={addAssignment} /> : null}
      </div>
      {renderAssignmentView()}
    </div>
  );
}

export default AssignmentApp;
