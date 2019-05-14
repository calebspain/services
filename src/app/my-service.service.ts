import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  static activateService() {
    console.log('You have been served.');
  }

}
