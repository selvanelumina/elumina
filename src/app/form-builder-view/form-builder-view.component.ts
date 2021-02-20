import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
// import { DropComponent } from '../drop/drop.component';

@Component({
  selector: 'app-form-builder-view',
  templateUrl: './form-builder-view.component.html',
  styleUrls: ['./form-builder-view.component.css']
})
export class FormBuilderViewComponent implements OnInit {
  preview: boolean = false;
  @Output() mainData = new EventEmitter<any>();;
  constructor() {
  }

  ngOnInit(): void {
  }

  displayModal() {
    this.preview = true;
  }
}
