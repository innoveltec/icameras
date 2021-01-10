import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CameraMarker } from '../../models/camera-marker.model';

@Component({
  selector: 'ichoosr-camera-map',
  templateUrl: './camera-map.component.html',
  styleUrls: ['./camera-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CameraMapComponent {
  @Input()
  markers: CameraMarker[];
}
