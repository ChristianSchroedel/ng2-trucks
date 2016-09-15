/**
 * Created by Christian Schrödel on 13.09.2016.
 */
import {Component, ViewEncapsulation, ChangeDetectionStrategy, Input, Output, EventEmitter} from '@angular/core';
import {TruckLocation} from '../../../types/truck-locations';

@Component({
  moduleId: module.id,
  selector: 'location-overview',
  templateUrl: 'location-overview.component.html',
  styleUrls: ['location-overview.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocationOverviewComponent {
  @Input() locations: TruckLocation[];
  @Output() locationClicked: EventEmitter<TruckLocation> = new EventEmitter<TruckLocation>();
}
