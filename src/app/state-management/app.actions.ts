import { createAction, props } from "@ngrx/store";
import { ICandidate } from "../app.interface";
import { FilterType, Tech } from "../app.type";

export const selectTechRequest = createAction(
    '[App] Set Tech Request',
    props<{tech: Tech}>()
);

export const addCandidateToSearchResults = createAction(
    '[App] Add Candidate To Search Results',
    props<{candidate: ICandidate}>()
);

export const setSelectedFilter = createAction(
    '[App] Set Selected Filter',
    props<{selectedFilter: FilterType}>()
);

export const requestUserConfig = createAction(
    '[App] Request User Config'
);

export const setUserName = createAction(
    '[App] Set User Name',
    props<{userName: string}>()
);

export const setNumberOfRecruits = createAction(
    '[App] Set Number Of Recruits',
    props<{numberOfRecruits: number}>()
);