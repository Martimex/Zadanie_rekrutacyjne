import React from "react";
import { Button, InputNumber, Checkbox } from  'antd';
import { Link } from "react-router-dom";
import '../App.css'

const MainPage = () => {

    function shownewPage() {
        console.log('new page');
      }

    return (
      <div className="content">
        <div className='select'>
          <span className='span-text'> Liczba miejsc : </span>
          <InputNumber min={1} max={10} defaultValue={1} />
        </div>
        <div className='check'>
          <Checkbox> Czy miejsca mają być obok siebie?  </Checkbox>
        </div>
        <div className='submit'>
            <Link to="/miejsca"> 
                <Button className='btn' type="primary" onClick={shownewPage}> Wybierz miejsca </Button>
            </Link>
          
        </div>
      </div>

    );
}

export default MainPage;