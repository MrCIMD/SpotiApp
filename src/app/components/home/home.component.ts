import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  public newReleases: any[] = [];
  public loading: boolean;
  public error: any;

  constructor(private spotify: SpotifyService) {
    this.error = {
      exits: false
    };
    this.loading = true;
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    }, error => {
      error.error.error.exits = true;
      this.error = error.error.error;
    });
  }

}
