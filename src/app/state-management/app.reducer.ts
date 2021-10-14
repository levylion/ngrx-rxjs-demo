import { createReducer, on } from "@ngrx/store";
import { addCandidateToSearchResults, setNumberOfRecruits, setSelectedFilter, setUserName } from "./app.actions";
import { IAppState } from "./app.store";

const initialState: IAppState = {
    searchResults: [],
    techFilter: "All",
    userName: '',
    numberOfRecruits: -1
}

export const appReducer = createReducer(
    initialState,
    on(addCandidateToSearchResults, (state, {candidate}) => {
        return {
            ...state,
            searchResults: [
                ...state.searchResults,
                candidate
            ]
        };
    }),
    on(setSelectedFilter, (state, {selectedFilter}) => {
        return {
            ...state,
            techFilter: selectedFilter
        };
    }),
    on(setUserName, (state, {userName}) => {
        return {
            ...state,
            userName
        };
    }),
    on(setNumberOfRecruits, (state, {numberOfRecruits}) => {
        return {
            ...state,
            numberOfRecruits
        };
    }),
);