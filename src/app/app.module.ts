import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlsModule } from './controls/controls.module';
import { FormAssemblerModule } from './form-assembler/form-assembler.module';
import { FormBuilderViewModule } from './form-builder-view/form-builder-view.module';
import { FormRendererModule } from './form-renderer/form-renderer.module';
import { PreviewModule } from './preview/preview.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ControlsModule,
    FormAssemblerModule,
    FormBuilderViewModule,
    FormRendererModule,
    PreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
