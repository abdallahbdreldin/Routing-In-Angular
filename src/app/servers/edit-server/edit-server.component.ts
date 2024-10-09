import { Component, OnInit, Query } from '@angular/core';
import { ServerServiceService } from '../server-service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { query } from '@angular/animations';
import { CanDeactivateServiceService } from '../../services/can-deactivate-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.scss'
})
export class EditServerComponent implements OnInit , CanDeactivateServiceService{

  server :any
  serverName = ''
  serverStatus = ''
  allowEdit:boolean = false;
  changedSaved:boolean = false;
  constructor(
    private serverService : ServerServiceService,
     private activatedRoute : ActivatedRoute,
    private Router:Router){}

  canDeactivate():Observable<boolean> | Promise<boolean> | boolean{
    if(!this.allowEdit){
      return true
    }if((this.serverName!==this.server.name || this.serverStatus!== this.server.status)&&!this.changedSaved){
      return confirm('are u sure to discard changes ?')
    }else {
      return false
    }
  }

  ngOnInit(): void {
    console.log('queryParams',this.activatedRoute.snapshot.queryParams)
    console.log('fragment',this.activatedRoute.snapshot.fragment)
    let id = +this.activatedRoute.snapshot.params['id']
    this.server = this.serverService.getServer(id)
    this.serverName = this.server.name
    this.serverStatus = this.server.status

    this.activatedRoute.queryParams.subscribe((query:Params)=>{
      console.log("query change",query)
      this.allowEdit = query['allowEdit'] == '1' ? true : false
    })

    this.activatedRoute.fragment.subscribe((fragment)=>{
      console.log("fragment change",fragment)
    })
  }

  onUpdateServer(){
    this.serverService.updateServer(
      this.server.id,
      {name:this.serverName,status:this.serverStatus}
    )
    this.changedSaved = true
    this.Router.navigate(['../'],{relativeTo:this.activatedRoute})
  }
}
