import { ICandidate } from "../app.interface";
import { FilterType, Tech } from "../app.type";

export interface IAppState {
    searchResults: ICandidate[];
    techFilter: FilterType;
    userName: string;
    numberOfRecruits: number;
}