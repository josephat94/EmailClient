import React, {Component} from 'react';
import {mails} from '../../Elements/data';
import "./EmailList.scss";
import EmailDetail from '../EmailDetail/EmailDetail';

class Emails extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true,mails:mails, didntread:0, mailToSee: mails[0], indexClick:-1,busqueda:'',
            filter: 'Inbox', 
        };
          
        // This binding is necessary to make `this` work in the callback

this.ClickEmail= this.ClickEmail.bind(this);
this.inbox= this.inbox.bind(this);
this.handleChange= this.handleChange.bind(this);
this.CountdidntRead= this.CountdidntRead.bind(this);
this.refreshList= this.refreshList.bind(this);
this.buscar= this.buscar.bind(this);
      }
componentDidMount(){
  console.log(this.props.getAllMails())  
    this.props.setCity('Zacatepec');  
    this.props.readAMail(null);

this.inbox();

}

inbox(){

    console.log("Solicita Correos", this.props);
let mailAux= this.createMail();
 mails.unshift(mailAux);


this.props.setEmails(mails);
//this.setState({mails: this.props.mails})
//console.log("Mails nuevos->", this.props.mails)
this.CountdidntRead();
setTimeout(()=>{this.inbox()},90000);

}
refreshList(){

  
this.setState({indexClick:-1}, ()=>{ this.CountdidntRead();})
   
}


buscar(event){
    this.setState({busqueda: event.target.value},
    
    
    ()=>{


 this.setState({indexClick:-1})
let arre= [];


this.state.mails.forEach(mail => {
    
let from=mail.from;
    if(from.startsWith(this.state.busqueda)){
        arre.push(mail);
    }
});



if(this.state.busqueda==''){
if(this.state.filter=='Spam'){

    this.setState({mails: this.props.spamMails},()=>{

        this.CountdidntRead();
        this.props.readAMail(null);    

    });
  
}else{
    if(this.state.filter=='Inbox'){

        this.setState({mails: this.props.mails},()=>{
    
            this.CountdidntRead();
            this.props.readAMail(null);  
    
        });
      
    }else{

        if(this.state.filter=='Deleted'){

            this.setState({mails: this.props.deletedMails},()=>{
        
                this.CountdidntRead();
                this.props.readAMail(null);  
        
            });
          
        }



    }


}}else{

    this.setState({mails: arre});
}


console.log("busqueda->", arre);

    
}
    
    );
};

createMail(){


    
let mail ={
    "from": "mhalla"+Math.floor((Math.random() * 100) + 1)+"0@walmart.com",
    "to": "cziem0@surveymonkey.com",
    "subject": "Office Assistant IV",
    "body": "condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis",
    "date": new Date().toLocaleDateString(),
    "isReaded": false,
    "avatar": "https://robohash.org/dignissimosetsuscipit.jpg?size=50x50&set=set1",
    "tag": "Indigo",
    "attachements": [{
        "file": "http://dummyimage.com/250x250.jpg/5fa2dd/ffffff",
        "name": "ut_nulla_sed.jpeg"
    }]

}
return mail;

}

handleChange(event) {
if(event.target.value=='Spam'){

    this.setState({mails: this.props.spamMails, indexClick:-1},()=>{

        this.CountdidntRead();
        this.props.readAMail(null);    

    });
  
}else{
    if(event.target.value=='Inbox'){

        this.setState({mails: this.props.mails, indexClick:-1},()=>{
    
            this.CountdidntRead();
            this.props.readAMail(null);  
    
        });
      
    }else{

        if(event.target.value=='Deleted'){

            this.setState({mails: this.props.deletedMails, indexClick:-1},()=>{
        
                this.CountdidntRead();
                this.props.readAMail(null);  
        
            });
          
        }



    }


}
  
    this.setState({filter: event.target.value});

  }

CountdidntRead(){
let cont=0;
if(this.state.mails.length>0){

    this.state.mails.forEach(mail => {

        if(mail.isReaded==false){

            cont++;
        }
        
    });
    this.setState({didntread: cont})
}else{

    this.setState({didntread: cont})
}



}
     ClickEmail(mail, index){
console.log("indice-<", mail);
this.props.readAMail(mail);
let mails= this.state.mails;
mails[index].isReaded=true;
  this.setState({mails: mails, indexClick: index})
         console.log("New Mail selected", mails[index]);
    
     this.CountdidntRead();
        }

    render() {
if(this.state.mails.length>0){
        return ( 

            <div className="Global">
        <div  className="box" >
        
    <div className="headerBar">
    <div className="label-header">
      <div>
      {this.state.filter} 
      </div>

      {this.state.filter=='Inbox'?
       <div className={this.state.didntread>0?'didntread animate-zoom':'allread animate-opacity'}>

       {this.state.didntread} 
 </div>

      :''

      }
     
      
       
    </div>



          <div className="select">
    <select name="slct" id="slct"  value={this.state.filter} onChange={this.handleChange}>
      <option value="filter" disabled>Filter by</option>
      <option value="Inbox">Inbox</option>
      <option value="Spam">Spam</option>
      <option value="Deleted">Deleted</option>
    </select>
  </div>

    </div>
<div className="searchBarContent">

<div id="search">
  <input id="field" type="text" value={this.state.busqueda} onChange={this.buscar} />
  <img  id="icon" src="http://www.brambauer.de/img/search.png"/>
</div>
</div>

<div className="mailContainer">


        {this.state.mails.map((mail, i) => {     
           console.log("Entered");                 
           // Return the element. Also pass key     
           return (
            
            <div key={i} className={i==this.state.indexClick?'mail-selected-active':(  mail.isReaded ?'mail ': ( i== 0? ' mail-selected  animate-top ':  'mail-selected  ' )) } onClick={(e) => this.ClickEmail(mail,i, e)}>
                    <div className="WhoSent">
                        <div>
                        {mail.from}    
                        </div>
                        <div className="date" style={{color: '#3B3D3F'}} >
            {mail.date}
                        </div>
                  
                    
                     </div>   
                     <div className="subject"> {mail.subject}    
                     <img  style={{maxHeight:'17px', height:'17px',width:"10px;", opacity:'0.5', paddingRight:'5px'}}  src="https://cdn2.iconfinder.com/data/icons/flat-web/512/716970-clip-512.png"></img>
                    </div>        

                   
            </div>

           ) ;
        })}
</div>
        
            </div>

            <div className="EmailDetail">
<EmailDetail Mail={this.props.mailToRead} spamMails={this.props.spamMails} setToSpam={this.props.setToSpam}
setToTrash={this.props.setToTrash} deletedMails={this.props.deletedMails} refresh={this.refreshList}
currentList={this.state.mails} index= {this.state.indexClick} setEmails={this.props.setEmails} Mails={this.props.mails} popMail={this.props.readAMail} 
category={this.state.filter}
>

</EmailDetail>

            </div>
            </div>
        )}else{


            return (
                <div className="Global">
                <div  className="box" >
                
            <div className="headerBar">
            <div className="label-header">
              <div>
              {this.state.filter} 
              </div>
        
              {this.state.filter=='Inbox'?
               <div className={this.state.didntread>0?'didntread animate-zoom':'allread animate-opacity'}>
        
               {this.state.didntread} 
         </div>
        
              :''
        
              }
             
              
               
            </div>
        
        
        
                  <div className="select">
            <select name="slct" id="slct"  value={this.state.filter} onChange={this.handleChange}>
              <option value="filter" disabled>Filter by</option>
              <option value="Inbox">Inbox</option>
              <option value="Spam">Spam</option>
              <option value="Deleted">Deleted</option>
            </select>
          </div>
        
            </div>
        <div className="searchBarContent">
        
        <div id="search">
          <input id="field" type="text" value={this.state.busqueda} onChange={this.buscar} />
          <img  id="icon" src="http://www.brambauer.de/img/search.png"/>
        </div>
        </div>
        
        <div className="noEmails animate-zoom">
<img src="http://laveterinaria.mx/img/isntemail.png" width="90%"/>
</div>
</div>
</div>        


            );
        }
    }

}
export default Emails;