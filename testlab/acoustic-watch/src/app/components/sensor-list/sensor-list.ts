import { Component, inject } from '@angular/core';
import { SensorCard } from '../sensor-card/sensor-card';
import { SensorService } from '../../services/sensor.service';

@Component({
  selector: 'app-sensor-list',
  imports: [SensorCard],
  templateUrl: './sensor-list.html',
  styleUrl: './sensor-list.css',
})
export class SensorList {
  private readonly sensorService = inject(SensorService);

  readonly sensors = this.sensorService.getSensors();
}
