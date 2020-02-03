import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private _router: Router) {}

  public goTo(item: any) {
    switch (item.type) {
      case 'album':
        this._router.navigate(['/artist/', item.artists[0].id]);
        break;
      case 'artist':
        this._router.navigate(['/artist/', item.id]);
        break;
      default:
        console.log('Sin Tipo - Valio');
        break;
    }
  }

}
