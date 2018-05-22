import {Component, OnInit} from '@angular/core';
import {MainService} from '../../services/main.service';
import {Department} from '../../models/department.model';
import {Employee} from '../../models/employee.model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.scss']
})
export class DepartmentsListComponent implements OnInit {
  departments: Department[];
  employees: Employee[];
  departmentEmployee = [];
  selectedDepartment: Department;
  newDepartmentTitle: string;

  constructor(private mainService: MainService) {
  }

  async ngOnInit() {
    this.newDepartmentTitle = '';
    this.departments = await this.mainService.getDepartments();
    this.employees = await  this.mainService.getEmployees();
  }

  async addDepartment() {
    const department: Department = new Department(this.newDepartmentTitle);
    const newDepartment = await this.mainService.create(department.name);
    if (newDepartment) {
      this.departments.push(new Department(newDepartment));
    }
    this.newDepartmentTitle = '';
  }

  onSelect(department: Department) {
    this.selectedDepartment = department;
    this.findEmployees();
  }


  async onDepartmentDelete(department: Department) {
    const deleted = await this.mainService.deleteDepartment(department.id);
    if (deleted) {
      this.departments = this.departments.filter(i => i !== department);
      if (this.selectedDepartment === department) {
        this.selectedDepartment = null;
      }
    }
  }

  findEmployees() {
    this.departmentEmployee = [];
    for (const employee of this.employees) {
      for (const departmentEmployee of employee.count) {
        if (departmentEmployee.department === this.selectedDepartment.id) {
          this.departmentEmployee.push(employee);
        }
      }
    }
  }
}
