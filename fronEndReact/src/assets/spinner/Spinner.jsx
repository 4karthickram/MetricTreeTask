import React from 'react';
import Loader from 'react-loader-spinner'

const Spinner = (props) => props.active && <div className={'center'}><Loader type="Triangle" color="#26a69a" height={80} width={80} /></div>;

export default Spinner;