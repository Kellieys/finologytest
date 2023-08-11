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
      // assuming same key value passed: using es6 and filter can make this shorter and cleaner
      // however, if say the key value passed is different, switch case is better
      const matchedCars = vehicles.filter(vehicle => vehicle[obj.filter] == obj.input)
      if(!matchedCars.length){
        // No car found
        setError("No car found, please try again...");
      }
      else {
        setError(null)
      }
      setCars(matchedCars)
      setIsLoading(false);
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
  