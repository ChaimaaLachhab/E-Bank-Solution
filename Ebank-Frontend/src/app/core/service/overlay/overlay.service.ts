import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  private visibilitySubject = new BehaviorSubject<boolean>(false);
  visibility$ = this.visibilitySubject.asObservable();

  private dataChangedSubject = new Subject<void>();
  dataChanged$ = this.dataChangedSubject.asObservable();

  private contentSubject = new BehaviorSubject<string | null>(null);
  content$ = this.contentSubject.asObservable();

  constructor(private router: Router) {}

  show(content: string, id?: number) {
    this.contentSubject.next(content);
    this.visibilitySubject.next(true);
    if (id !== undefined) {
      this.router.navigate([`/overlay/${content}`, id]);
    } else {
      this.router.navigate([`/overlay/${content}`]);
    }
  }

  notifyDataChanged() {
    this.dataChangedSubject.next();
  }

  hide() {
    this.visibilitySubject.next(false);
    this.notifyDataChanged();
  }
}
