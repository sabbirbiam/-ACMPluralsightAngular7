import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() rattingClicked: EventEmitter<string> = new EventEmitter<string>();
    ngOnChanges() {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick() {
        // console.log(`The rating  ${this.rating} is showen`);
        this.rattingClicked.emit(`The rating  ${this.rating} was clicked`);
    }
}
