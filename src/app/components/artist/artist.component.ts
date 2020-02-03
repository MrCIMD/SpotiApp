import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent {

  public loading: boolean;
  public loadingList: boolean;
  public artist: any;
  public topStracks: any;

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading = true;
    this.loadingList = true;
    this._activatedRoute.params.subscribe((param: any) => {
      this.getArtist(param.id);
      this.getTopStracks(param.id);
    });
  }

  public getArtist(id: string) {
    this._spotifyService.getArtist(id).subscribe((response: any) => {
      this.artist = response;
      this.loading = false;
    });
  }

  public getTopStracks(id: string) {
    this._spotifyService.getTopTracks(id).subscribe((response: any) => {
      this.topStracks = response;
      this.loadingList = false;
      console.log(this.topStracks);
    });
  }
}
