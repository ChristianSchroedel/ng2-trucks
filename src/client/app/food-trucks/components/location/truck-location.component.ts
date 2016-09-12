/**
 * Created by Christian Schrödel on 07.09.2016.
 */
import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {TruckEvent} from '../../types/truck-events';

@Component({
  moduleId: module.id,
  selector: 'truck-location',
  templateUrl: 'truck-location.component.html',
  styleUrls: ['truck-location.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TruckLocationComponent {
  @Input() truckEvents: TruckEvent[];
  @Output() operatorClicked: EventEmitter<string> = new EventEmitter<string>();
}
