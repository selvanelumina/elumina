import { TargetBinder } from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {DropEvent} from 'angular-draggable-droppable';

@Component({
    selector: 'app-drop',
    templateUrl: './drop.component.html',
    styleUrls: ['../form-builder-view/form-builder-view.component.css']
})
export class DropComponent implements OnInit {

    mainData: any = [];                             // Outer main container
    // partData: any = [];                             // Inner sub-container
    textbox=0;
    dropdown=0;
    temp=0;
    private tempData: DropEvent<any>;
    
    constructor() {
    }

    ngOnInit(): void {
    }

    /**
           * Drag and drop the main container to get data
           * @param data: data
     */
    onDrop(data: DropEvent<any>) {
        console.log('Main Data', data);
        this.tempData = data;
    }

    /**
           * Drag and drop the secondary container to get data
           * @param data: data
     */
    // onDropPart(data: DropEvent<any>) {
    //     console.log('Part Data', data);
    //     this.tempData = data;
    // }
    
    /**
           * Drag event monitoring of the main container
           * @param ev: event
           * @param desc: description
     */
    onPointerMain(ev: PointerEvent, desc: string) {
        console.log(desc, ev);
        ev.preventDefault();
        ev.stopPropagation();
        setTimeout((_: any) => {
            if (this.tempData) {
                if(this.tempData.dropData == "TextBox"){
                  this.textbox++;
                  this.temp = this.textbox;
                }
                if(this.tempData.dropData == "DropDown"){
                  this.dropdown++;
                  this.temp = this.dropdown;
                }
                this.mainData.unshift(this.tempData.dropData + " " + this.temp);
                this.tempData = null;
                this.displayTable();
            }
        });
    }
    
    displayTable(){
      var perrow = 1, // 1 CELL PER ROW
          html = "<head>";
          html += "<style>";
          html += "table {";
          html+="border-collapse: separate;";
          html+="border-spacing: 0 4px; cellpadding: 50}";
          html+="td {";
          html+=" border:1px solid black; width:1500px; padding:1px";
          html+="}";
          html+="</style>";
          html+="</head>";
          html+="<body>";
          html+="<table>";
          html+="<tr>";

      for (var i=0; i<this.mainData.length; i++) {
        html+="<table>";
        html += `<td>${this.mainData[i]}</td>`;
        var next = i+1;
        if (next%perrow==0 && next!=this.mainData.length) {
          html += "</tr><tr>";
        }
      }
      html += "</tr></table>"
      html+="</body>";
      document.getElementById("container").innerHTML = html;
    }
    
    /**
           * Drag event monitoring of secondary container
           * @param ev: event
           * @param desc: description
     */
    // onPointerPart(ev: PointerEvent, desc: string) {
    //     console.log(desc, ev);
    //     ev.preventDefault();
    //     ev.stopPropagation();
    //     setTimeout(_ => {
    //         if (this.tempData) {
    //             this.partData.push(this.tempData);
    //             this.tempData = null;
    //         }
    //     });
    // }
    
}