import { Component, Input } from "@angular/core";
import { ICandidate } from "src/app/app.interface";

@Component({
    selector: 'candidate-card',
    templateUrl: 'candidate-card.component.html',
    styleUrls: ['candidate-card.component.scss']
})
export class CandidateCardComponent {
    @Input() candidate!: ICandidate;
    public color!: string;

    ngOnInit() {
        this.color = this.candidate.experty === 'Angular' ? 'red' 
            : this.candidate.experty === 'React' ? '#3f9eef'
            : 'green';
    }
}