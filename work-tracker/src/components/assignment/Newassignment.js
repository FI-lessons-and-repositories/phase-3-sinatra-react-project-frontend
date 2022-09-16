import React, { useState } from 'react';

const assignmentAPI = "http://localhost:9292/assignments";

function Newassignment({addAssignment}) {
  const [title, setTitle] = useState("");
  const [categories_id, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [authors_id, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/assignments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
        categories_id,
        authors_id,
      }),
    })
      .then((r) => r.json())
      .then((newAssignment) => addAssignment(newAssignment));

    setTitle("");
    setBody("");
    setCategory("");
    setAuthor("");
  }

  return (
    <form className="new-poem-form" onSubmit={handleSubmit} >
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Author"
        value={authors_id}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        placeholder="Category"
        value={categories_id}
        onChange={(e) => setCategory(e.target.value)}
      />
      <textarea
        placeholder="Write your assignment here..."
        rows={10}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <input
        type="submit"
        value="POST ASSIGNMENT"
      />
    </form>
  );
}

export default Newassignment;
