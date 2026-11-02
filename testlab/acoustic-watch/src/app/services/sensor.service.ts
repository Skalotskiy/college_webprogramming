import { Injectable } from '@angular/core';
import { Sensor } from '../models/sensor.model';

@Injectable({
  providedIn: 'root',
})
export class SensorService {
  getSensors(): Sensor[] {
    return [
      {
        id: 1,
        name: 'Сенсор Центр',
        district: 'Галицький',
        noiseLevel: 72,
        status: 'active',
      },
      {
        id: 2,
        name: 'Сенсор Сихів',
        district: 'Сихівський',
        noiseLevel: 54,
        status: 'active',
      },
      {
        id: 3,
        name: 'Сенсор Левандівка',
        district: 'Залізничний',
        noiseLevel: 68,
        status: 'inactive',
      },
    ];
  }
}
