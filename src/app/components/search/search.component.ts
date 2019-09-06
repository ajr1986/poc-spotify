import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  private termino: string = "";

  constructor(private spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  public buscarArtista() {

    if (this.termino.length > 0) {

      this.spotifyService.getArtistas(this.termino).subscribe(
        artists => {
          console.log(artists);
        }
      );
    }

  }

}
