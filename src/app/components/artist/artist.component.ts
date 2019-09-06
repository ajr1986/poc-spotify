import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  private artista: any = {};
  private topTracks: any[] = [];

  private isArtistReady: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private spotifyService: SpotifyService) {

    this.isArtistReady = false;

    this.activatedRoute.params
      .map(params => params = params['id'])
      .subscribe(params => {
        this.getArtista(params);
        this.getTopTracks(params);
      });
  }

  ngOnInit() {
  }

  getArtista(id: string) {

    this.isArtistReady = false;

    this.spotifyService.getArtista(id)
      .subscribe(resp => {
        console.log(resp);
        this.artista = resp;
        this.isArtistReady = true;
      });
  }

  getTopTracks(id: string) {

    this.spotifyService.getTopTracks(id)
      .subscribe(resp => {
        console.log(resp);
        this.topTracks = resp;
      });
  }

}
