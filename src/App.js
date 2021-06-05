import React from 'react';
import { Button, InputNumber, Checkbox } from  'antd';
//import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
//import logo from './logo.svg';
//import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (

    <div className="App">
      <div className="content">
        <div className='select'>
          <span className='span-text'> Liczba miejsc : </span>
          <InputNumber min={1} max={10} defaultValue={1} />
        </div>
        <div className='check'>
          <Checkbox> Czy miejsca mają być obok siebie?  </Checkbox>
        </div>
        <div className='submit'>
          <Button type="primary"> Wybierz miejsca </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
