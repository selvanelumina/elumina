import { TargetBinder } from '@angular/compiler';
import {Component, OnInit} from '@angular/core';
import {DropEvent} from 'angular-draggable-droppable';

@Component({
    selector: 'app-drop',
    templateUrl: './drop.component.html',
    styleUrls: ['../form-builder-view/form-builder-view.component.css']
})
export class DropComponent implements OnInit {

    mainData: any = [];     
    textbox=0;
    dropdown=0;
    temp=0;
    private tempData: DropEvent<any>;
    
    constructor() {
    }

    ngOnInit(): void {
    }

    onDrop(data: DropEvent<any>) {
        console.log('Main Data', data);
        this.tempData = data;
    }

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
              this.mainData.unshift({"name": this.tempData.dropData, "id": this.temp})
              this.displayTable();
          }
      });
    }
    
    displayTable(){
      var perrow = 1, 
          html = "<head>";
          html += "<style>";
          html += "table {";
          html+="border-collapse: separate;";
          html+="border-spacing: 0 4px; cellpadding: 50}";
          html+="td {";
          html+="border: none;"
          html+="}";
          html+="</style>";
          html+="</head>";
          html+="<body>";
          html+="<table>";
          html+="<tr>";

      for (var i=0; i<this.mainData.length; i++) {
        html+="<table>";
        if(this.mainData[i].name == "TextBox"){
          html+=`<div><input style="width:100%" type="text" placeholder="${this.mainData[i].name}:${this.mainData[i].id}"></input></div>`;
          var next = i+1;
          if (next%perrow==0 && next!=this.mainData.length) {
            html += "</tr><tr>";
          }
        }
        if(this.mainData[i].name == "DropDown"){
          html+='<div><select style="width:100%">';
          html+='<option>DropDown ';
          html+= this.mainData[i].id;
          html+= '</option>';
          html+='</select></div>';
          var next = i+1;
          if (next%perrow==0 && next!=this.mainData.length) {
            html += "</tr><tr>";
          }
        }

      }
      html += "</tr></table>"
      html+="</body>";
      document.getElementById("container").innerHTML = html;
    }
}