import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CameraMarker } from '../../models/camera-marker.model';
import { Camera } from '../../models/camera.model';
import { CameraService } from '../../services/camera.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ichoosr-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.scss'],
})
export class CamerasComponent implements OnInit {
  private readonly camerasSubject = new BehaviorSubject<Camera[]>(null);

  cameras$: Observable<Camera[]> = this.camerasSubject.asObservable();

  camera3$: Observable<Camera[]> = this.cameras$.pipe(
    map((cameras) =>
      cameras.filter((camera) => parseInt(camera.Number, 10) % 3 === 0)
    )
  );

  camera5$: Observable<Camera[]> = this.cameras$.pipe(
    map((cameras) =>
      cameras.filter((camera) => parseInt(camera.Number, 10) % 5 === 0)
    )
  );

  camera3_5$: Observable<Camera[]> = this.cameras$.pipe(
    map((cameras) =>
      cameras.filter(
        (camera) =>
          parseInt(camera.Number, 10) % 3 === 0 &&
          parseInt(camera.Number, 10) % 5 === 0
      )
    )
  );

  cameraOther$: Observable<Camera[]> = this.cameras$.pipe(
    map((cameras) =>
      cameras.filter(
        (camera) =>
          parseInt(camera.Number, 10) % 3 !== 0 &&
          parseInt(camera.Number, 10) % 5 !== 0
      )
    )
  );

  mapMarkers$: Observable<CameraMarker[]> = this.cameras$.pipe(
    map((cameras) => {
      const markers: CameraMarker[] = [];
      if (cameras) {
        cameras.forEach((camera) => {
          const marker: CameraMarker = {
            Lat: parseFloat(camera.Latitude),
            Lng: parseFloat(camera.Longitude),
          };
          markers.push(marker);
        });
      }

      return markers;
    })
  );

  constructor(private cameraService: CameraService) {}

  ngOnInit(): void {
    this.loadCameras();
  }

  private loadCameras(): void {
    this.cameraService
      .getCameras()
      .pipe(untilDestroyed(this))
      .subscribe((cameras) => this.camerasSubject.next(cameras));
  }
}
