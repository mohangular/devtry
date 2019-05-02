import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CardService } from './core/services/card.service';
import { Card } from './core/models/card.model';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string;
  displayHeader: boolean;
  imgSrc: SafeResourceUrl;
  cards$: Observable<Card[]>;

  constructor(protected sanitizer: DomSanitizer, private cardSvc: CardService, private router: Router) { 
  router.events.forEach((event) => {
    if (event instanceof NavigationStart) {
      if (event['url'] == '/login') {
        this.displayHeader = false;
      } else {            
        this.displayHeader = true;
      }
    }
  });
}
  ngOnInit() {
    this.title = 'Angular App';
    this.imgSrc = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==');
    this.cards$ = this.cardSvc.getCards();
  }
}
