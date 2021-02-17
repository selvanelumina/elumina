import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragAndDropModule } from 'angular-draggable-droppable';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    AngularDraggableModule,
    DragAndDropModule
  ]
})
export class FormBuilderViewModule { }
