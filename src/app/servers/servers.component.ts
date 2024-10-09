import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from './server-service.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.scss'
})
export class ServersComponent implements OnInit{

  servers : {id:number,name:string,status:string}[] = []

  constructor(private serverService : ServerServiceService){}

  ngOnInit(): void {
    this.servers = this.serverService.getServers()
  }


}
