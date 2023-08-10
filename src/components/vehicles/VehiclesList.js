import React from 'react';

import './VehiclesList.css';

const VehiclesList = props => {
  const imgStyle = { width: '300px', height: '200px',  alignSelf: 'center' };

  return (
    <section className="vehicle-list">
      <h2>Car List</h2>
        {props.vehicles.map(obj => (
          <div className='carListDiv' 
            key={obj.id}>
            <div>
            <h3>{obj.carModel}</h3>
            <span><img style={imgStyle} src={obj.img}  alt="carimage"/></span>
            </div>
            <div className='textAreaDiv'>
            <p className='detail'>Brand: {obj.brand}</p>
            <p className='detail'>Fuel: {obj.feul}</p>
            <p className='detail'>Category: {obj.category}</p>
            <p className='detail'>Tyre: {obj.tyre}</p>
            <p className='detail'>Door: {obj.door}</p>
            </div>
          </div>
        ))}
    </section>
  );
};

export default VehiclesList;
