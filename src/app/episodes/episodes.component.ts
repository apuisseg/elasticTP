import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Episode } from '../episode';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {
  episodes$: Episode[];
  numPage: number = 1;
  query: string = "";
  errorMessage: string = "";
  constructor(private data: DataService) { }
  simpleQueried: boolean = false;

  ngOnInit() {
    this.data.getAllDocuments('got','doc',this.numPage).then(response => {
      this.episodes$ = response.hits.hits;
    }, error => {
      console.error(error);
    });
  }

  getDocuments(){
    this.data.getAllDocuments('got','doc',this.numPage).then(response => {
      this.episodes$ = response.hits.hits;
      console.log('all');
      console.log(this.episodes$);
    }, error => {
      console.error(error);
    });
  }

  up(){
    if(this.numPage < 8){
      this.numPage++;
    } else {
      this.numPage = 8;
    }

  }
  
  down(){
    if(this.numPage > 1) {
      this.numPage --;
    } else {
      this.numPage = 1;
    }
  }

  changePage(){
    console.log(this.simpleQueried);
    if(this.simpleQueried){
      this.search();
    } else {
      this.getDocuments();
    }
  }

  search(){
    this.errorMessage = '';
    if(this.query.trim().length === 0){
      this.simpleQueried = false;
      this.getDocuments();
    } else {
      this.data.simpleQuery('got','doc',this.query,this.numPage).then(response => {
        if(response.hits.hits.length > 0) {
          console.log('search');
          this.episodes$ = response.hits.hits;
          console.log(this.episodes$);
          this.simpleQueried = true;
        } else {
          this.errorMessage = 'No results. Maybe wrong request ?'
        }
      }, error => {
        this.errorMessage = 'Bad query';
        console.error(error);
      });
    }
  }

}
