import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';

import './App.css';

const App = () => {

  const [input, setInput] = useState("");
  const [work, setWork] = useState([]);
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
          work={work}
          setWork={setWork}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
