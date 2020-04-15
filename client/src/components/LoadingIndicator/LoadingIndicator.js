import React from 'react';
import './LoadingIndicator.css';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function LoadingIndicator() {

      return (

            <div className="loader-wrapper">
                  <h1>Loading</h1>
                  <Loader
                        type="Bars"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={20000} />
            </div>
      )
}

export default LoadingIndicator;