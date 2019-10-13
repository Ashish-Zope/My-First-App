import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer=false;
  serverCerationStatus='No Server Created';
  serverName='test server name';
  userName='';
  userStatus='';
  serverCreated:boolean=false;
  Servers=['TestServer']
 displayDetails:boolean=false;
  ngOnInit(){}
  constructor()
  {
    setTimeout(()=>{
    this.allowNewServer=true;
  },2000);

}
userId:number=1;
getServerStatus() {
  return 'Active';
  
}
onCreateServer()
{
  this.serverCerationStatus='Server is created'+ this.serverName ;
  this.serverCreated=true;
  this.Servers.push(this.serverName);
}

OnServerNameUpdate(event:Event)
{
  //console.log(event)
  this.serverName=(<HTMLInputElement>event.target).value;
}

onUserBtnClick()
{
  this.userStatus='User is created';
}


}
