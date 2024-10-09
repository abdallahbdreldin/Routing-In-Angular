import { Component, Injectable } from '@angular/core';
import { CanDeactivate, CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanDeactivateServiceService {
  canDeactivate:() => Observable<boolean>|Promise<boolean>|boolean
}

export const canDeactivateGuard : CanDeactivateFn<CanDeactivateServiceService>
              =(Component:CanDeactivateServiceService)=>{
                return Component.canDeactivate()
              }