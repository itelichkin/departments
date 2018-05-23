import {forwardRef, Inject, Injectable} from '@angular/core';
import {HttpClientService} from './http-client.service';

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


@Injectable()
export class MainService {

  constructor(@Inject(forwardRef(() => HttpClientService)) private httpClientService: HttpClientService) {
  }

  async getDepartments(): Promise<any> {
    const result = await this.httpClientService.get('/departments');
    return result.body ? JSON.parse(result.body) : [];
  }

  async getEmployees(): Promise<any> {
    const result = await this.httpClientService.get('/employees');
    return result.body ? JSON.parse(result.body) : [];
  }

  async createDepartment(department: { name: string }): Promise<{ saved: boolean }> {
    const result = await this.httpClientService.post('/departments', department);
    return result.body ? JSON.parse(result.body) : false;
  }

  async deleteDepartment(id: string): Promise<{ removed: boolean }> {
    const options = {id};
    const result = await this.httpClientService.delete('/department', options);
    return result || false;
  }

  async createEmployee(employee: { name: string }): Promise<any> {
    const result = await this.httpClientService.post('/employees', employee);
    return result.body ? JSON.parse(result.body) : false;
  }

  async deleteEmployee(id: string): Promise<any> {
    const options = {id};
    const result = await this.httpClientService.delete('/employee', options);
    return result.body ? JSON.parse(result.body) : false;
  }


}
