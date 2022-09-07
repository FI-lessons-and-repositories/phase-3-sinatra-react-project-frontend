import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import WorkTodo from './components/Work';

import './App.css';

const App = () => {

  const [input, setInput] = useState("");
  const [works, setWorks] = useState([]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          works={works}
          setWorks={setWorks}
          />
          <div>
            <WorkTodo works={works} setWorks={setWorks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
