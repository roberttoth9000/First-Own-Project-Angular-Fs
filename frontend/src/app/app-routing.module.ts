import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/pages/registration/registration.module').then(
        (mod) => mod.RegistrationModule
      ),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./modules/pages/registration/registration.module').then(
        (mod) => mod.RegistrationModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
