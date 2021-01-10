import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Camera } from '../../models/camera.model';

@Component({
  selector: 'ichoosr-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CameraListComponent {
  @Input()
  cameras3: Camera[];

  @Input()
  cameras5: Camera[];

  @Input()
  cameras3_5: Camera[];

  @Input()
  camerasOther: Camera[];
}
