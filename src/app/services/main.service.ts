import {Injectable} from '@angular/core';

const data = {
  employees: [
    {
      'id': 1,
      'name': 'Peter',
      'count': [
        {
          'department': 23
        }
      ]
    },
    {
      'id': 2,
      'name': 'Ivan',
      'count': [
        {
          'department': 23
        }
      ]
    },
    {
      'id': 3,
      'name': 'Jack',
      'count': [
        {
          'department': 22
        }
      ]
    },
    {
      'id': 4,
      'name': 'Olivia',
      'count': [
        {
          'department': 22
        }
      ]
    }
  ],
  departments: [
    {
      'id': 1,
      'name': 'Department of Politics and International Studies'
    },
    {
      'id': 10,
      'name': 'Department of Architecture '
    },
    {
      'id': 22,
      'name': 'Department of Veterinary Medicine'
    },
    {
      'id': 23,
      'name': 'Main Department'
    },

  ]
};


@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() {
  }

  getDepartments(): Promise<any> {
    return Promise.resolve(data.departments);
  }

  getEmployees(): Promise<any> {
    return Promise.resolve(data.employees);
  }

  create(name: string): Promise<any> {
    return null;
  }

  deleteDepartment(id: number): Promise<any> {
    return null;
  }


}
