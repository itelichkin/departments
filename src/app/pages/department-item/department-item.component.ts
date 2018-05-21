import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Department} from '../../models/department.model';

@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent implements OnInit {
  @Input() department: Department;
  @Output() deleted = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleted.emit(this.department);
  }


}
