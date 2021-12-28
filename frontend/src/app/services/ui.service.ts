import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddHouse: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddHouse(): void {
    this.showAddHouse = !this.showAddHouse;
    this.subject.next(this.showAddHouse)
  }

  onAddHouseToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
