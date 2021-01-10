import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { environment } from '../../../../../apps/icamera/src/environments/environment';
import { Camera } from '../models/camera.model';

@Injectable({
  providedIn: 'root',
})
export class CameraService {
  constructor(private httpClient: HttpClient) {}

  protected endpoint(): string {
    return `${environment.apiBaseUrl}`;
  }

  public getCameras(): Observable<Camera[]> {
    return this.httpClient.get<Camera[]>(`${this.endpoint()}/cameras`);
  }
}
