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


@Injectable({
  providedIn: 'root'
})
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

  create(name: string): Promise<any> {
    return null;
  }

  deleteDepartment(id: string): Promise<any> {
    return null;
  }


}
