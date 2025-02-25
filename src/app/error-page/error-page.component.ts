import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent implements OnInit {
errorMessage = ''
constructor(private activatedroute : ActivatedRoute){}

  ngOnInit(): void {
    this.activatedroute.snapshot.data['message']
    this.activatedroute.data.subscribe((data:Data)=>{
      this.errorMessage=data['message']
    })
  }


}
