import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addCandidateToSearchResults, requestUserConfig, selectTechRequest, setNumberOfRecruits, setUserName } from "./app.actions";
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';
import { SearchCandidates } from "src/services/search-candidates.service";
import { UserDetailsService } from "src/services/user-details.service";

@Injectable()
export class AppEffects {
    fetchResultsSingleMode$ = createEffect(() => this.actions$.pipe(
        ofType(selectTechRequest),
        // show here what heppens when you use mergeMap, concatMap etc..
        mergeMap((action) => {
            return this.searchCandidates.getCandidatesForSpecificTech(action.tech);
        }),
        map((candidate) => addCandidateToSearchResults({candidate}))
    ));

    requestUserName$ = createEffect(() => this.actions$.pipe(
        ofType(requestUserConfig),
        switchMap(() => this.userDetails.getUserName()),
        map(userName => setUserName({userName}))
    ));

    requestNumberOfCandidates$ = createEffect(() => this.actions$.pipe(
        ofType(requestUserConfig),
        switchMap(() => this.userDetails.getNumberOfRecruits()),
        map(numberOfRecruits => setNumberOfRecruits({numberOfRecruits}))
    ));

    constructor(private actions$: Actions,
        private searchCandidates: SearchCandidates,
        private userDetails: UserDetailsService) {}
}