import React, { useState, useEffect, useCallback } from 'react';

import VehiclesList from './VehiclesList';

import { vehicles } from '../../cardata';
import VehiclesForm from './VehiclesForm';

const VehiclesMain = props => {

  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCars(vehicles)
    console.log('RENDERING', cars);
  }, [cars]);


  const findVehicleHandler = obj => {
    // obj = ({ filter: selectedFilter, input: userInput });
    console.log("findVehicleHandler", obj)
    setIsLoading(true);
    const timer = setTimeout(() => {
        switch (obj.filter) {
          case 'carModel':
              setCars(vehicles.filter(car => car.carModel == obj.input));
            break;
         case 'brand':
              setCars(vehicles.filter(car => car.brand == obj.input));
            break;
        //  case 'feul':
        //     break;
        //  case 'category':
        //     break;
        //  case 'tyre':
        //     break;
        //   case 'door':
        //     break;
          default:
            throw new Error('Invalid');
        }
    }, 1000);
    return () => {
      clearTimeout(timer);
      setIsLoading(false);
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
  