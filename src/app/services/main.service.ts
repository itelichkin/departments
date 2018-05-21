import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  getDepartments(): Promise<any> {
    return null;
  }

  getEmployees(): Promise<any> {
    return null;
  }

  create(name: string): Promise<any> {
    return null;
  }

  deleteDepartment(id: number): Promise<any> {
    return null;
  }



}
