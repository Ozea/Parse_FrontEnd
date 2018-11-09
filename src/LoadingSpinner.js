import React from 'react';
import Loading from 'react-loading-components';
import 'bootstrap/dist/css/bootstrap.min.css';

 
const LoadingSpinner = () => (
    <div className="container text-center">
        <Loading type='puff' width={50} height={50} fill='#f44242' />
        <h3>Loading...</h3>
    </div>
);
 
export default LoadingSpinner;