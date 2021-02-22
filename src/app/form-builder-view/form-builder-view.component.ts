import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { DataModel } from '../data-model.dataModel';


@Component({
  selector: 'app-form-builder-view',
  templateUrl: './form-builder-view.component.html',
  styleUrls: ['./form-builder-view.component.css']
})
export class FormBuilderViewComponent implements OnInit {

  preview: boolean = false;
  dataModel: DataModel;

  constructor() {
  }


  ngOnInit(): void {
  }

  displayModal() {
    this.preview = true;
  }
}
