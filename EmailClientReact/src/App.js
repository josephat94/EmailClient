import React, {Component} from 'react';
import EmailsListContainer from './containers/EmailListContainer'
import EmailDetail from './Components/EmailDetail/EmailDetail'
import "./App.scss";
import PropTypes from 'prop-types';

//Actions
import {setCity} from './actions';
import { connect } from 'react-redux';


class App extends Component {

    constructor(props) {
        super(props);
       
    
        // This binding is necessary to make `this` work in the callback
    
      }

componentDidMount(){





}


    render() {

        return ( 
        <div className = "App" >
<EmailsListContainer></EmailsListContainer>

            </div>
        )
    }

}



export default App;
