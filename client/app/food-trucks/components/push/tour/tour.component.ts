/**
 * Created by Christian Schrödel on 05.09.2016.
 */
import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {TruckEvent} from '../../../types/truck-events';
import {TruckLocation} from '../../../types/truck-locations';
import {Operator} from '../../../services/foodtruck.service';

@Component({
  selector: 'tour',
  templateUrl: 'tour.component.html',
  styleUrls: ['./tour.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TourComponent {
  @Input() event: TruckEvent;
  @Output() locationClicked: EventEmitter<TruckLocation> = new EventEmitter<TruckLocation>();
  @Output() operatorClicked: EventEmitter<Operator> = new EventEmitter<Operator>();
}