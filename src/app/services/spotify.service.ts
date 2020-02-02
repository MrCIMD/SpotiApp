import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service fount');
  }

  public getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCYWwTETVZtboRstRb-r1yha4bKpJW7jXrBUvDCOUkodgNZcT5VEbJcWxrzaWzyrnv6a53keurpNFSfX-4'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers}).pipe(map((data: any) => {
      return data.albums.items;
    }));
  }

  public getArtist(text: string){
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCYWwTETVZtboRstRb-r1yha4bKpJW7jXrBUvDCOUkodgNZcT5VEbJcWxrzaWzyrnv6a53keurpNFSfX-4'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${text}&type=artist&limit=20`, {headers}).pipe(map((data: any) => {
      return data.artists.items;
    }));
  }
}
