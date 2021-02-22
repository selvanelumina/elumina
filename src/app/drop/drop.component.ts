import {Component, OnInit, HostListener, Output, EventEmitter} from '@angular/core';
import {DropEvent} from 'angular-draggable-droppable';
import {DataModel} from '../data-model.dataModel';
import {Global} from '../global';


@Component({
    selector: 'app-drop',
    templateUrl: './drop.component.html',
    styleUrls: ['../form-builder-view/form-builder-view.component.css']
})
export class DropComponent implements OnInit{
    dataModel: DataModel;
    mainData: DataModel[] = [];     
    textbox=0;
    dropdown=0;
    temp=0;
    private tempData: DropEvent<any>;

    @HostListener('mousedown', ['$event'])
    onHostClick(event: MouseEvent) {
      alert("Do not click on this region");
      event.stopPropagation();
    }
    
    constructor() {
      
    }

    ngOnInit(): void {
    }

    onDrop(data: DropEvent<any>) {
        console.log('Main Data', data);
        this.tempData = data;
    }

    onPointerMain(ev: PointerEvent, desc: string) {
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
              this.dataModel={"name":"", "id":0};
              this.dataModel.name=this.tempData.dropData;
              this.dataModel.id=this.temp;
              Global.mainData.unshift(this.dataModel);
              // this.mainDataEvent.emit(Global.mainData);
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

      for (var i=0; i<Global.mainData.length; i++) {
        html+="<table>";
        if(Global.mainData[i].name == "TextBox"){
          html+=`<div><input style="width:100%" type="text" placeholder="${Global.mainData[i].name}:${Global.mainData[i].id}"></input></div>`;
          var next = i+1;
          if (next%perrow==0 && next!=Global.mainData.length) {
            html += "</tr><tr>";
          }
        }
        if(Global.mainData[i].name == "DropDown"){
          html+='<div><select style="width:100%">';
          html+='<option>DropDown ';
          html+= Global.mainData[i].id;
          html+= '</option>';
          html+='</select></div>';
          var next = i+1;
          if (next%perrow==0 && next!=Global.mainData.length) {
            html += "</tr><tr>";
          }
        }

      }
      html += "</tr></table>"
      html+="</body>";
      document.getElementById("container").innerHTML = html;
    }
    
    async delay(ms: number) {
      await new Promise<void>(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
    }
}