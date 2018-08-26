const  SET_CITY= "SET_CITY";
const SET_MAIL="SET_MAIL";
const GET_ALLMAILS="GET_ALL_MAILS";
export const SET_TO_SPAM= "SET_TO_SPAM";
export const SET_TO_TRASH= "SET_TO_TRASH";
export const SET_EMAILS= "SET_EMAILS";
export const READ_A_MAIL= "READ_A_MAIL";
export const setCity=value=>({type: SET_CITY, value});
export const setMail=value=>({type: SET_MAIL, mail});
export const setToTrash= value=>({type: SET_TO_TRASH, value})
export const setToSpam= value=>({type: SET_TO_SPAM, value})
export const setEmails= value=>({type:SET_EMAILS, value})
export const readAMail=value=>({type: READ_A_MAIL, value});
export const getALLMails=()=>({type: GET_ALLMAILS, value: null});


