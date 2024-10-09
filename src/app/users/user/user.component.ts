import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {

  user:{id:number , name :string};

  constructor(private acivatedRoute : ActivatedRoute){}
  
  ngOnInit(): void {
    this.user={
      id:this.acivatedRoute.snapshot.params['id'],
      name:this.acivatedRoute.snapshot.params['name']
    }
    this.acivatedRoute.params.subscribe((params:Params)=>{
      this.user.id = + params['id']
      this.user.name = params['name']
    });
    
  }


}
