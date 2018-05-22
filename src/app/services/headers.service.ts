import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {

  constructor() { }

  getCustomClientHeader(name: string, value: string) {
    return new HttpHeaders().set(name, value);
  }
}
