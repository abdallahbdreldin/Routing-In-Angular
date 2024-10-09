import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { server } from "../servers/server.model";
import { Observable } from "rxjs";
import { ServerServiceService } from "../servers/server-service.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:"root"
})
export class serverResolver implements Resolve<server>

{
    constructor(private serverService : ServerServiceService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<server>|Promise<server>|server {
        return this.serverService.getServer(+route.params['id'])
    }
}    