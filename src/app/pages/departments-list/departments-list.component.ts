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
    await this.loadDepartments();
    await this.loadEmployees();
  }

  async loadDepartments() {
    this.departments = await this.mainService.getDepartments();
  }

  async loadEmployees() {
    this.employees = await this.mainService.getEmployees();
    await this.loadDepartments();
  }

  async addDepartment() {
    const newDepartment = await this.mainService.createDepartment({name: this.newDepartmentTitle});
    if (newDepartment.saved) {
      await this.loadDepartments();
    }
    this.newDepartmentTitle = '';
  }


  onSelect(department: Department) {
    this.selectedDepartment = department;
    this.findEmployees();
  }


  async onDepartmentDelete(department: Department) {
    const deleted = await this.mainService.deleteDepartment(department.id);
    if (deleted.removed) {
      await this.loadDepartments();
      this.selectedDepartment = null;
    }
  }

  findEmployees() {
    this.departmentEmployee = [];
    for (const employee of this.employees) {
      for (const departmentEmployee of employee.count) {
        if (departmentEmployee === this.selectedDepartment.id) {
          this.departmentEmployee.push(employee);
        }
      }
    }
  }
}
