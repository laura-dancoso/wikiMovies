import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  darkMode$!: BehaviorSubject<boolean>;

  constructor() {
    
  }

  checkInitialTheme(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.darkMode$ = new BehaviorSubject(prefersDark);
    if (prefersDark) document.body.classList.add('dark');
  }

  toggleTheme(){
    document.body.classList.toggle('dark');
    this.darkMode$.next(!this.darkMode$.value);
  }
}
