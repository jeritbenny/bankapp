import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
   @Input() item:string|undefined
   //input - it is used to hold data from parent component
   @Output() onCancel= new EventEmitter();
   //
   @Output() onDelete = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
cancel(){
  //alert('clicked')
  this.onCancel.emit()
  //oncancel- user defined event
}
delete(){
  this.onDelete.emit(this.item)
 // alert('delete clicked')
}
}
