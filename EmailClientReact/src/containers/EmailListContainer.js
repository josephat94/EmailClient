import React, {Component} from 'react';

import Emails from '../Components/EmailList/EmailList'
import PropTypes from 'prop-types';

import {setCity, getALLMails, readAMail, setEmails, setToSpam, setToTrash} from '../actions';
import { connect } from 'react-redux';

class EmailsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,mails:mails };
          
        // This binding is necessary to make `this` work in the callback

      }



    render() {

        return ( 
<Emails> </Emails>
        )
    }



}

App.prototypes={
    setCity: PropTypes.func.isRequired,
    getAllMails: PropTypes.func.isRequired,
    setEmails: PropTypes.func.isRequired,
    setToSpam: PropTypes.func.isRequired,
    setToTrash: PropTypes.func.isRequired,
}

const mapDispatchToPropsActions= dispatch=>({
    setCity:value=>dispatch(setCity(value)), 
    getAllMails: ()=>dispatch(getALLMails()),
    readAMail: (value)=>dispatch(readAMail(value)),
    setEmails: (value)=>dispatch(setEmails(value)),
    setToSpam: (value)=>dispatch(setToSpam(value)),
    setToTrash: (value)=>dispatch(setToTrash(value)),
});
const mapStateToProps= ({mails,mailToRead,spamMails,deletedMails   })=>({mails: mails,mailToRead: mailToRead, spamMails:spamMails, deletedMails:deletedMails });

export default connect(mapStateToProps,mapDispatchToPropsActions)(Emails);