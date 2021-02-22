import {Component, OnInit} from '@angular/core';
import { DataModel } from '../data-model.dataModel';

@Component({
    selector: 'app-drag',
    templateUrl: './drag.component.html',
    styleUrls: ['../form-builder-view/form-builder-view.component.css']
})
export class DragComponent implements OnInit {
    data: any = [];
    dataModel: DataModel;
    constructor() {
        this.data[0] = 'TextBox';
        this.data[1] = "DropDown";
    }

    ngOnInit(): void {
    }
}