import React from "react";
import { InputNumber, Checkbox } from  'antd';
import '../App.css'

const Miejsca = () => {

    return (
      <div className="content">
        <div className='select'>
          <span className='span-text'> Liczba miejsc : </span>
          <InputNumber min={1} max={10} defaultValue={1} />
        </div>
        <div>
            <ul>
                {['Alex', 'John', 'Jaz', 'Fedrik', 'Anthony'].map((user, idx) => {
                    return <li key={idx}> {user} </li>
                })}
            </ul>
        </div>
      </div>
    );
}

export default Miejsca;