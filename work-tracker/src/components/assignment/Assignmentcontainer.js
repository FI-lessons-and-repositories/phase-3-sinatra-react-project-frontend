import React from "react";
import Assignments from "./Assignments";

function Assignmentcontainer({assignments, removeAssignment}) {
  return (
    <div className="assignments-container">
      {assignments.map(assignment => {
        return (
          <Assignments
            key={assignment.id}
            assignment={assignment}
            removeAssignment={removeAssignment}
          />
        )
        })}
    </div>
  );
}

export default Assignmentcontainer;
