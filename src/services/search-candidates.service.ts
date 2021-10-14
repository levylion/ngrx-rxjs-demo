import { Injectable } from "@angular/core";
import { interval, Observable, of } from "rxjs";
import { map, take } from "rxjs/operators";
import { ICandidate } from "src/app/app.interface";
import { Tech } from "src/app/app.type";

@Injectable({providedIn: 'root'})
export class SearchCandidates {
    constructor() {}

    public getCandidatesForSpecificTech(tech: Tech): Observable<ICandidate> {
        return interval(1000).pipe(
            map(() => {
                const candidate: ICandidate = {
                    description: 'Highly motivated developer, eager to learn',
                    experty: tech,
                    id: 'd',
                    name: 'Lion'
                };

                return candidate;
            }),
            take(5)
        );
    }
}