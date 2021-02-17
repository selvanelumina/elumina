import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-drag',
    templateUrl: './drag.component.html',
    styleUrls: ['../form-builder-view/form-builder-view.component.css']
})
export class DragComponent implements OnInit {
    data: any = [];

    constructor() {
        this.data[0] = 'TextBox';
        this.data[1] = "DropDown";
    }

    ngOnInit(): void {
    }
}