import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ControlsModule } from './controls/controls.module';
import { FormAssemblerModule } from './form-assembler/form-assembler.module';
import { FormBuilderViewModule } from './form-builder-view/form-builder-view.module';
import { FormRendererModule } from './form-renderer/form-renderer.module';
import { PreviewModule } from './preview/preview.module';
import { FormBuilderViewComponent } from './form-builder-view/form-builder-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularDraggableModule } from 'angular2-draggable';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { DropComponent } from './drop/drop.component';
import { DragComponent } from './drag/drag.component';
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBuilderViewComponent,
    DropComponent,
    DragComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ControlsModule,
    FormAssemblerModule,
    FormBuilderViewModule,
    FormRendererModule,
    PreviewModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    DragAndDropModule
  ],
  providers: [],

  exports: [
    ControlsModule,
    FormAssemblerModule,
    FormBuilderViewModule,
    FormRendererModule,
    PreviewModule,
    BrowserAnimationsModule,
    DragAndDropModule
  ],
  // bootstrap: [AppComponent]
  bootstrap: [FormBuilderViewComponent]
})
export class AppModule { }
