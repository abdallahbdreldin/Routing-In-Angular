import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users=[
    {
      id:1,
      name:"ahmed"
    },{
      id:2,
      name:"eslam"
    },
    {
      id:3,
      name:"mohammed"
    },
    {
      id:4,
      name:"zizo"
    }
  ]
}
