import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class UserDetailsService {
    public getUserName(): Observable<string> {
        return of('Lion Levy');
    }

    public getNumberOfRecruits(): Observable<number> {
        return of(21).pipe(delay(3000));
    }
}