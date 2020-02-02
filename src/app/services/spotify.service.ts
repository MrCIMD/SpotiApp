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

  public getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      Authorization: 'Bearer BQCYWwTETVZtboRstRb-r1yha4bKpJW7jXrBUvDCOUkodgNZcT5VEbJcWxrzaWzyrnv6a53keurpNFSfX-4'
    });

    return this.http.get(url, {headers});
  }

  public getNewReleases(): any {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => data.albums.items));
  }

  public getArtist(text: string){
    return this.getQuery(`search?q=${text}&type=artist&limit=20`).pipe(map((data: any) => data.artists.items));
  }
}
