import { Component, input } from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { Sensor } from '../../models/sensor.model';

@Component({
  selector: 'app-sensor-card',
  imports: [HighlightDirective],
  templateUrl: './sensor-card.html',
  styleUrl: './sensor-card.css',
})
export class SensorCard {
  sensor = input.required<Sensor>();
}
