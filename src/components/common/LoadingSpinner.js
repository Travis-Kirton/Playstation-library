import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Spinner } from '../styleComponents/gamelib-styles';

export class LoadingSpinner extends Component {
  render() {
    return (
      <Spinner>
        <Loader type="TailSpin" color="#0099cc" height={100} width={100} />
      </Spinner>
    );
  }
}
