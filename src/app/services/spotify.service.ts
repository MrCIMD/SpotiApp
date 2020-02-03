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
      Authorization: 'Bearer BQA5rMzTxaufQUw8kzkqcRI1hsEKho7QV66HBJhsOt2UcXlJS-NyHMswn4ixme9Q58W1tnKtrYcY5AD25pQ'
    });

    return this.http.get(url, {headers});
  }

  public getNewReleases(): any {
    return this.getQuery('browse/new-releases?limit=20').pipe(map((data: any) => data.albums.items));
  }

  public getArtists(text: string){
    return this.getQuery(`search?q=${text}&type=artist&limit=20`).pipe(map((data: any) => data.artists.items));
  }

  public getArtist(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  public getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map((data: any) => data.tracks));
  }
}
