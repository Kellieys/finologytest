import React, { useState, useEffect, useCallback } from 'react';

import VehiclesList from './VehiclesList';

import { vehicles } from '../../cardata';
import VehiclesForm from './VehiclesForm';

const VehiclesMain = props => {

  const [cars, setCars] = useState(vehicles);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('RENDERING', cars);
  }, [cars]);


  const findVehicleHandler = obj => {
    // obj = ({ filter: selectedFilter, input: userInput });
    console.log("findVehicleHandler", obj)
    setIsLoading(true);
    // setTimeout: to make it looks like loading
    // in real life it would be async code that is awaiting the real data from API to load
    const timer = setTimeout(() => {
      // assuming same key value passed: using simple loop can make this shorter and cleaner
      // however, if say the key value passed is different, switch case is better
        switch (obj.filter) {
          case 'carModel':
              setCars(vehicles.filter(car => car.carModel === obj.input));
            break;
         case 'brand':
              setCars(vehicles.filter(car => car.brand === obj.input));
            break;
         case 'feul':
              setCars(vehicles.filter(car => car.feul === obj.input));
            break;
         case 'category':
              setCars(vehicles.filter(car => car.category === obj.input));
            break;
         case 'tyre':
              setCars(vehicles.filter(car => car.tyre === obj.input));
            break;
          case 'door':
              setCars(vehicles.filter(car => car.door === obj.input));
             break;
          default:
            throw new Error('Invalid');
        }
        setIsLoading(false);
    }, 1000); 
    return () => {
      clearTimeout(timer);
    };
  };

    return (
        <div className="App">

          <VehiclesForm
            onFindVehicle={findVehicleHandler}
            loading={isLoading}
          />   

          <section>
            <VehiclesList
                vehicles = {cars}
            />
          </section>
          
      </div>
    );
  };
  
  export default VehiclesMain;
  