import { Component, OnInit } from '@angular/core';
import { ServerServiceService } from '../server-service.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';

@Component({
  selector: 'app-individual-server',
  templateUrl: './individual-server.component.html',
  styleUrl: './individual-server.component.scss'
})
export class IndividualServerComponent implements OnInit {

  server :any;

  constructor(private serverService:ServerServiceService , private activatedRoute:ActivatedRoute, private Router:Router){}

  ngOnInit(): void {
    // var id = +this.activatedRoute.snapshot.params['id']
    // this.server = this.serverService.getServer(id)

    // this.activatedRoute.params.subscribe((params:Params)=>{
    //   this.server = this.serverService.getServer(+params['id'])
    // })
    this.activatedRoute.data.subscribe((data:Data)=>{
      this.server=data['server']
    })
    this.server = this.serverService.getServer(this.server.id)
  }


  onEdit(){
    this.Router.navigate(['edit'],{relativeTo:this.activatedRoute})
  }

 

}
