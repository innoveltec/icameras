import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cameras', pathMatch: 'full' },
  {
    path: 'cameras',
    loadChildren: () => import('@ichoosr/cameras').then((m) => m.CamerasModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
