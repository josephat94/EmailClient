import React, {Component} from 'react';


import './EmailDetail.scss'

class EmailDetail extends Component{

constructor(props){

    super(props);
    this.setToSpam= this.setToSpam.bind(this);
    this.setToTrash= this.setToTrash.bind(this);
    this.markAsUnRead= this.markAsUnRead.bind(this);
}


setToSpam(mail){
 let arre=   this.props.spamMails; 
   arre.push(mail);
this.props.setToSpam(arre);
console.log(this.props)
this.props.popMail(null);
this.props.currentList.splice(this.props.index,1);
this.props.refresh();


}
setToTrash(mail){
    let arre=   this.props.deletedMails; 
    arre.push(mail);
    this.props.setToTrash(arre);
    this.props.popMail(null);
    this.props.currentList.splice(this.props.index,1);
this.props.refresh();

}

markAsUnRead(mail){
mail.isReaded=false;
let arre=   this.props.Mails; 

arre.push(mail);

this.props.setEmails(arre);
this.props.popMail(null);
this.props.currentList.splice(this.props.index,1);
this.props.refresh();

}


    render(){
if(this.props.Mail!=null){
        return(

           <div className="Global-Content animate-opacity">

           <div className="Header">
<div className={this.props.category=="Deleted"?'btn-delete-block':"btn-delete"} onClick={this.props.category!="Deleted"?()=>{this.setToTrash(this.props.Mail) }: ()=>{console.log("no se puede enviar")}}>
Delete </div>
<div className= {this.props.category=="Spam"?'btn-spam-block':"btn-spam"} onClick={ this.props.category!="Spam"? ()=>{this.setToSpam(this.props.Mail)}:()=>{console.log("No se puede")}}>
    Spam

</div>   
<div className={this.props.Mail.isReaded?"btn-unread": "btn-unread-inactive animate-opacity"} onClick={()=>{this.props.Mail.isReaded?this.markAsUnRead(this.props.Mail):null}} >
Mark As Unread </div>     
   </div>
<div className="whoSent ">
{this.props.Mail.from}
</div>
           <div className="tags-Content">
Tags: 
<div className="tag">{this.props.Mail.tag}</div>
           </div>

           <div className="mail-Content">
           <div className="mail">

        {this.props.Mail.body}
           </div>
   

             <div className="buttons-Content">
<div style={{marginLeft:'10px'}}>                 <img  style={{maxHeight:'17px', height:'17px',width:"8px;", opacity:'0.5'}}  height="11px" src="https://cdn2.iconfinder.com/data/icons/flat-web/512/716970-clip-512.png"></img></div>
<div class="btnReply"> Reply</div>
</div>
 
           </div>
         
   
         </div>
        );}else{
            return (<div></div>)
        }
    }
}export default EmailDetail;