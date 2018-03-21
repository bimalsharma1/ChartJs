import { Component, OnInit } from '@angular/core';
import { DndModule} from 'ng2-dnd/ng2-dnd';


@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent implements OnInit {
  transferData: Object = {id: 1, msg: 'Hello'};
  receivedData: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }

  transferDataSuccess($event: any) {
    this.receivedData.push($event);
}

}
