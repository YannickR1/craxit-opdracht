import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddHouse: boolean = false;
  private showHouseDetails: boolean = false;
  private subjectAddHouse = new Subject<any>();
  private subjectShowDetails = new Subject<any>();

  constructor() { }

  toggleAddHouse(): void {
    this.showAddHouse = !this.showAddHouse;
    this.subjectAddHouse.next(this.showAddHouse)
  }

  toggleShowDetails(): void {
    this.showHouseDetails = !this.showHouseDetails;
    this.subjectShowDetails.next(this.showHouseDetails)
  }

  onAddHouseToggle(): Observable<any> {
    return this.subjectAddHouse.asObservable();
  }

  onShowDetailsToggle(): Observable<any> {
    return this.subjectShowDetails.asObservable();
  }
}
