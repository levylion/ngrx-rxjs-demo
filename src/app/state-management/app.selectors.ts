import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ICandidate } from "../app.interface";
import { FilterType, Tech } from "../app.type";
import { IAppState } from "./app.store";

export const appFeatureSelector = createFeatureSelector<IAppState>('app');

export const filterByTechSelector = createSelector(
    appFeatureSelector,
    (appState: IAppState) => appState.techFilter
);
export const searchResultsSelector = createSelector(
    appFeatureSelector,
    (appState: IAppState) => appState.searchResults
);
export const filteredSearchResultsSelector = createSelector(
    searchResultsSelector,
    filterByTechSelector,
    (searchResults: ICandidate[], selectedFilter: FilterType) => {
        return selectedFilter === 'All' ? searchResults :
            searchResults.filter(s => s.experty === selectedFilter);
    }
);
export const getUserNameSelector = createSelector(
    appFeatureSelector,
    (appState: IAppState) => appState.userName
);
export const getNumberOfRecruitsSelector = createSelector(
    appFeatureSelector,
    (appState: IAppState) => appState.numberOfRecruits
);