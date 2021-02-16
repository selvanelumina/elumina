import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderViewModule } from './form-builder-view/form-builder-view.module'

const routes: Routes = [
  {path: 'formbuilder', component: FormBuilderViewModule },
  {path: '**', component: FormBuilderViewModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
