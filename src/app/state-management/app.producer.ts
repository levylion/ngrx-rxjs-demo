import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ICandidate } from "../app.interface";
import { FilterType, Tech } from "../app.type";
import { requestUserConfig, selectTechRequest, setSelectedFilter } from "./app.actions";
import { filterByTechSelector, filteredSearchResultsSelector, getNumberOfRecruitsSelector, getUserNameSelector } from "./app.selectors";

@Injectable({providedIn: 'root'})
export class AppProducer {
    public getFilteredSearchResults$: Observable<ICandidate[]> = this.store.select(filteredSearchResultsSelector);
    public filterByTech$ = this.store.select(filterByTechSelector);
    public getUserName$: Observable<string> = this.store.select(getUserNameSelector);
    public getNumberOfRecruits$: Observable<number> = this.store.select(getNumberOfRecruitsSelector);

    public selectTechRequest(tech: Tech): void {
        this.store.dispatch(selectTechRequest({tech}));
    }

    public setSelectedFilter(selectedFilter: FilterType): void {
        this.store.dispatch(setSelectedFilter({selectedFilter}));
    }

    public requestUserConfig(): void {
        this.store.dispatch(requestUserConfig());
    }

    constructor(private store: Store) {}
}