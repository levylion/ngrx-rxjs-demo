import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { combineLatest, Observable } from "rxjs";
import { filter, map, mergeMap, switchMap, take, withLatestFrom } from "rxjs/operators";
import { AppProducer } from "src/app/state-management/app.producer";

@Injectable({providedIn: 'root'})
export class UserDetailsResolver implements Resolve<{userName: string; numberOfRecruits: number}> {

    constructor(private appProducer: AppProducer) {}

    resolve(): Observable<{userName: string; numberOfRecruits: number}> {
        this.appProducer.requestUserConfig(); // will result in 2 mock requests, in 5 sec delay to demonstrate combinedLatest

        return combineLatest([this.appProducer.getUserName$, this.appProducer.getNumberOfRecruits$])
            .pipe(
                filter(([userName, numberOfRecruits]) => userName !== '' && numberOfRecruits !== -1),
                map(([userName, numberOfRecruits]) => ({
                    userName,
                    numberOfRecruits
                })),
                take(1)
            );


        // example with withLatestFrom. What will happen here?

        /* return this.appProducer.getUserName$
            .pipe(
                withLatestFrom(this.appProducer.getNumberOfRecruits$),
                filter(([userName, numberOfRecruits]) => userName !== '' && numberOfRecruits !== -1),
                map(([userName, numberOfRecruits]) => ({
                    userName,
                    numberOfRecruits
                })),
                take(1)
            ); */


        // example to demonstrate location of take(1)

       /*  return this.appProducer.getUserName$
            .pipe(
                filter(userName => userName !== ''),
                switchMap((userName) => {
                    return this.appProducer.getNumberOfRecruits$.pipe(
                        filter(numberOfRecruits => numberOfRecruits !== -1),
                        map((numberOfRecruits) => ({
                            userName,
                            numberOfRecruits
                        })),
                        take(1)
                    )
                }),
                //take(1)
            ); */
        
    }
}