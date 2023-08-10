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


  const findVehicleHandler = input => {
    //setIsLoading(true);
    console.log("findVehicleHandler",input)
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
  