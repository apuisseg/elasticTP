import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-detail-episode',
  templateUrl: './detail-episode.component.html',
  styleUrls: ['./detail-episode.component.scss']
})
export class DetailEpisodeComponent implements OnInit {
  private title:string;
  private episodeData: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.title = params.title);
   }

  ngOnInit() {
    this.data.getDocument('got','doc',this.title).then(response => {
      this.episodeData = response.hits.hits;
      console.log(this.episodeData);
    }, error => {
      console.error(error);
    });
  }

}
