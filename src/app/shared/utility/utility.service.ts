import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}
  readFromLocalStorage<T>(key: string = ''): T {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  writeToLocalStorage<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
