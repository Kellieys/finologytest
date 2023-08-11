import React, { useState, useEffect, useCallback } from 'react';

import { vehicles } from '../../cardata';
import VehiclesList from './VehiclesList';
import VehiclesForm from './VehiclesForm';
import ErrorModal from '../UI/ErrorModal';

const VehiclesMain = props => {

  const [cars, setCars] = useState(vehicles);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

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
              setCars(vehicles.filter(car => car.carModel == obj.input));
            break;
         case 'brand':
              setCars(vehicles.filter(car => car.brand == obj.input));
            break;
         case 'feul':
              setCars(vehicles.filter(car => car.feul == obj.input));
            break;
         case 'category':
              setCars(vehicles.filter(car => car.category == obj.input));
            break;
         case 'tyre':
              setCars(vehicles.filter(car => car.tyre == obj.input));
            break;
          case 'door':
              setCars(vehicles.filter(car => car.door == obj.input));
             break;
          default:
            throw new Error('Invalid');
        }
        setIsLoading(false);
        // handle if the search is empty/no value
        console.log(" length", vehicles.length)
        if (vehicles.length == 0) {
          console.log("vehicles length", vehicles.length)
          setError("No car found, please try again...");
        }
        else {
          setError(null)
        }
    }, 1000); 
    return () => {
      clearTimeout(timer);
    };
  };

  const clearError = () => {
    setError(null);
  }

    return (
        <div className="App">
          {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

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
  