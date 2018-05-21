import {Component, Input, OnInit} from '@angular/core';
import {Employee} from '../../models/employee.model';
import {Department} from '../../models/department.model';

@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.scss']
})
export class EmployeeItemComponent implements OnInit {
  @Input() employee: Employee;
  @Input() selectedDepartment: Department;


  constructor() { }

  ngOnInit() {
  }

}
