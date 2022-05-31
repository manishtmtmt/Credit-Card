import './App.css';
import Form from './Components/Form';
import Card from './Components/Card';
import { useState } from 'react';

function App() {
  const [data, setData] = useState({})

    const onChange = (e) => {
        let {name, value} = e.target;
        setData({
            ...data,
            [name]: value,
        })
    }
    console.log(data)
  return (
    <div className="App">
      <Form onChange={onChange} />
      <Card data={data} />
    </div>
  );
}

export default App;
