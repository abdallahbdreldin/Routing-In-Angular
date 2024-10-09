import { Injectable } from '@angular/core';
import { server } from './server.model';

@Injectable({
  providedIn: 'root'
})
export class ServerServiceService {

  private servers:{id:number,name:string,status:string}[] = 
  [
    {
      id:1,
      name : "production server",
      status: "online"
    },
    {
      id:2,
      name:"test server",
      status:"offline"
    },
    {
      id:3,
      name:"Development serve",
      status:"offline"
    }
  ]


  constructor() { }

  getServers(){
    return this.servers
  }

  getServer(id:number) :server{
    const server = this.servers.find((s) =>{
      return s.id === id
    })
    if(server){
      return server
    }
    return {id:0,name:"server not Found",status:"offline"}
  }

  updateServer(id:number,serverinfo:{name:string,status:string}){
    const server = this.servers.find((s)=>{
      return s.id === id
    })
    if(server){
      server.name = serverinfo.name
      server.status = serverinfo.status
    }
  }
}
