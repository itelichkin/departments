import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MainService} from '../../services/main.service';
import {Employee} from '../../models/employee.model';
import {Department} from '../../models/department.model';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss']
})
export class EmployeeTableComponent implements OnInit {
  dataSource: MatTableDataSource<Employee>;
  displayedColumns: string[];
  employees: Employee[];
  departments: Department[];
  selectedEmployee: Employee;
  employeeName: string;
  isLoading: boolean;

  constructor(private mainService: MainService) {
  }

  async ngOnInit() {
    this.isLoading = true;
    this.displayedColumns = ['id', 'name', 'department', 'action'];
    await this.updateData();
    this.departments = await this.mainService.getDepartments();
    this.isLoading = false;
  }

  async updateData() {
    this.employees = await this.mainService.getEmployees();
    this.dataSource = new MatTableDataSource(this.employees);
  }

  selectRow(row) {
    this.selectedEmployee = row;
  }

  async onDepartmentSelect(e) {
    await this.mainService.addEmployeeDepartment({
      id: this.selectedEmployee.id,
      name: this.selectedEmployee.name,
      departmentId: e.value
    });
  }

  async removeEmployee(employee) {
    const result = await this.mainService.deleteEmployee(employee.id);
    if (result) {
      this.updateData();
    }
  }

  async addEmployee() {
    const result = await this.mainService.createEmployee({name: this.employeeName});
    this.employeeName = '';
    if (result) {
      this.updateData();
    }
  }

}
