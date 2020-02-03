import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{

  public artists: any[] = [];
  public loading: boolean;

  constructor(private spotify: SpotifyService) { }

  public search(text: string) {
    this.loading = true;
    if (text.length > 0) {
      this.spotify.getArtists((text.length > 0) ? text : '').subscribe((result: any) => {
        this.artists = result;
        this.loading = false;
      });
    }
  }

}
