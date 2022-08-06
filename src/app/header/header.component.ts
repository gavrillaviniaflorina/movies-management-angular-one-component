import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() movies:Movie[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  public totalPrice():number{
    let total=0;
    for(let i=0;i<this.movies.length;i++){
      total+=this.movies[i].price;
    }
    return total;
  }

  public totalMovies():number{
    return this.movies.length;
  }

  public totalWatched():number{
    let total=0;
    for(let i=0;i<this.movies.length;i++){
     if(this.movies[i].status===true){
      total++;
     }
    }
    return total;
  }

}
