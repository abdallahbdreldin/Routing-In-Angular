import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { IndividualServerComponent } from './servers/individual-server/individual-server.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';
import { canDeactivateGuard } from './services/can-deactivate-service.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { serverResolver } from './services/server.resolver.service';

const routes: Routes = [
  
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'servers',
    component:ServersComponent,
      children:[
        {path:':id',
          component:IndividualServerComponent,
          resolve:{server:serverResolver}
        },
        {path:':id/edit',
          component:EditServerComponent,
          canDeactivate:[canDeactivateGuard]
        }
      ]
  },
  {
    path:'users',
    component:UsersComponent,
    canActivate:[AuthGuardService],
    canActivateChild:[AuthGuardService],
      children:[
        {path:':id/:name',component:UserComponent}
      ]
  },
  // {path:'not-found',component:NotFoundComponent},
  {path:'not-found',component:ErrorPageComponent,
    data:{
      message:'page not found'
    }
  },
  {path:'**',redirectTo:'not-found'} ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
