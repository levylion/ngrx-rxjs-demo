import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { ICandidate } from "src/app/app.interface";
import { FilterType, Tech } from "src/app/app.type";
import { AppProducer } from "src/app/state-management/app.producer";

@Component({
    selector: 'candidates',
    templateUrl: 'candidates.component.html',
    styleUrls: ['candidates.component.scss']
})
export class CandidatesComponent implements OnInit {
    candidates$: Observable<ICandidate[]>;
    selectedFilter$: Observable<FilterType>;
    userDetails!: {userName: string; numberOfRecruits: number;};

  constructor(public appProducer: AppProducer, private activatedRoute: ActivatedRoute) {
    this.candidates$ = this.appProducer.getFilteredSearchResults$;
    this.selectedFilter$ = this.appProducer.filterByTech$;
  }

  ngOnInit(): void {
    this.userDetails = this.activatedRoute.snapshot.data.userDetails as {userName: string; numberOfRecruits: number;};
  }

  onTechCardClick(tech: Tech): void {
    this.appProducer.selectTechRequest(tech);
  }

  onFilterChange(selectedValue: FilterType): void {
    this.appProducer.setSelectedFilter(selectedValue);
  }
}