 import {getALLMails,setCity,readAMail, READ_A_MAIL, SET_EMAILS, SET_TO_TRASH, SET_TO_SPAM} from '../actions/index';
 

 
 export const mail = (state, action) => {
console.log("AccionClickeada",action.type, "estado->", state);
    switch(action.type){
case READ_A_MAIL:
return { 
    ...state, mailToRead: action.value};

break;
case SET_EMAILS:
return{
    ...state, mails: action.value

}
break;


case SET_TO_SPAM:
return{
    ...state, spamMails: action.value

}
break;

case SET_TO_TRASH:
return{
    ...state, deletedMails: action.value

}
break;
    }


    return state;
}