

import {createStore} from 'redux';
import {mails} from '../Elements/data';
import {mail} from '../reducers/mail';
let initialState={
    mails: mails,
    mailToRead: null,
    spamMails: [],
    deletedMails: [],


};

export const store = createStore(mail, initialState,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__());
