import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { DataModel } from '../data-model.dataModel';
import { Global } from '../global';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  dataModel: DataModel;
  mainDataLocal: DataModel[] = [];
    
  constructor(
  ) { 
;   this.mainDataLocal = Global.mainData;
  }

  ngOnInit(): void {
  }

}
