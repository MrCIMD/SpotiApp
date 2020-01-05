import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service fount');
  }

  public getNewReleases(): any {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQD7VBNQayByK6OghkTypPEJcmxd-R9rvTThkZDgMnd7vxcAfsxu1-3IQN3-nOFtzyE7cOuld3nAjniHK9E'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers});
  }
}
