import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterfaceCrudComponent } from './interface-crud/interface-crud.component';

const routes: Routes = [
  {
    path: '',
    component: InterfaceCrudComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
