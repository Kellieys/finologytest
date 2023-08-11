import React, { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';

import Card from '../UI/Card';
import Loading from '../UI/Loading';
import './VehiclesForm.css';

const VehiclesForm = React.memo(props => {

    const [selectedFilter, setSelectedFilter] = useState('carModel'); // default filter is brand
    const [userInput, setUserInput] = useState('');
    const [isInputEmpty, setIsInputEmpty] = useState(true);
  
    const submitHandler = event => {
      event.preventDefault();
      props.onFindVehicle({ filter: selectedFilter, input: userInput });
    };
    
    const onChangeInputHandler = value => {
      setUserInput(value)
      if (value === "") {
        setIsInputEmpty(true)
      }
      else {
        setIsInputEmpty(false)
      }
    };
  
    // There's also better way to do it, e.g. multi-filter
    // Enhancement can be done such as, multi-dropdown section, radio, checkbox, form validation
    // Since time is limited, I would keep it simple by using 1 filter dropdown & user able to input the attributes they want
    return (
      <section className="vehicle-form">
        <Card>
          <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="filter">
                Filter on {' '}
                    <select 
                    value={selectedFilter}  
                    onChange={e => setSelectedFilter(e.target.value)} // ... and update the state variable on any change
                    name="filter">
                        <option value="carModel">Model</option>
                        <option value="brand">Brand</option>
                        <option value="feul">Feul</option>
                        <option value="category">Category</option>
                        <option value="tyre">No of Tyres</option>
                        <option value="door">No of Doors</option>
                    </select>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="input">Input</label>
                <input
                type="text"
                id="input"
                value={userInput}
                onChange={event => {
                  onChangeInputHandler(event.target.value);
                }}
                />
            </div>
            <div className="vehicle-form__actions">
                <button disabled={isInputEmpty} type="submit">Find</button>
                {props.loading && <Loading />}
            </div>
          </form>
        </Card>
      </section>
    );
  });
  
  export default VehiclesForm;