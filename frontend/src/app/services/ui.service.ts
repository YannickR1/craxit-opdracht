import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddHouse: boolean = false;
  private showHouseDetails: boolean = false;
  private showEditHouse: boolean = false;
  private subjectAddHouse = new Subject<any>();
  private subjectShowDetails = new Subject<any>();
  private subjectEditHouse = new Subject<any>();

  constructor() {}

  toggleAddHouse(): void {
    this.showAddHouse = !this.showAddHouse;
    this.subjectAddHouse.next(this.showAddHouse);
  }

  toggleEditHouse(): void {
    this.showEditHouse = !this.showEditHouse;
    this.subjectEditHouse.next(this.showEditHouse);
  }

  toggleShowDetails(): void {
    this.showHouseDetails = !this.showHouseDetails;
    this.subjectShowDetails.next(this.showHouseDetails);
  }

  onEditHouseToggle(): Observable<any>{
    return this.subjectEditHouse.asObservable();

  }

  onAddHouseToggle(): Observable<any> {
    return this.subjectAddHouse.asObservable();
  }

  onShowDetailsToggle(): Observable<any> {
    return this.subjectShowDetails.asObservable();
  }
}
