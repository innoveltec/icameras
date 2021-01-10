import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { CamerasRoutingModule } from './cameras-routing.module';
import { CamerasComponent } from './containers/cameras/cameras.component';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { CameraMapComponent } from './components/camera-map/camera-map.component';

@NgModule({
  imports: [CommonModule, AgmCoreModule, CamerasRoutingModule],
  declarations: [CamerasComponent, CameraListComponent, CameraMapComponent],
})
export class CamerasModule {}
