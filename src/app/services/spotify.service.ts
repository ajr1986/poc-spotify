import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  private artist: any[] = [];

  constructor(private httpClient: HttpClient) {

  }

  getArtistas(termino: string) {

    let url = `https://api.spotify.com/v1/search?query=${termino}&type=artist&offset=0&limit=20`;

    let headers = new HttpHeaders({
      "authorization": "Bearer BQBwJ8khbDKfrdgIOaxthXk8_CnxiEIXps-QoFv4qyZj1PWASo1EoHSYyxaopBFVsdanSgRLN-eNAXyveV8"
    });

    return this.httpClient.get(url, { headers: headers })
      .map((resp: any) => {
        this.artist = resp.artists.items;
        return this.artist;
      });
  }

  getArtista(id: string) {

    let url = `https://api.spotify.com/v1/artists/${id}`;

    let headers = new HttpHeaders({
      "authorization": "Bearer BQBwJ8khbDKfrdgIOaxthXk8_CnxiEIXps-QoFv4qyZj1PWASo1EoHSYyxaopBFVsdanSgRLN-eNAXyveV8"
    });

    return this.httpClient.get(url, { headers: headers });
  }

  getTopTracks(id: string) {

    let url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=AR`;

    let headers = new HttpHeaders({
      "authorization": "Bearer BQBwJ8khbDKfrdgIOaxthXk8_CnxiEIXps-QoFv4qyZj1PWASo1EoHSYyxaopBFVsdanSgRLN-eNAXyveV8"
    });

    return this.httpClient.get(url, { headers: headers }).map(data => data["tracks"]);
  }
}
