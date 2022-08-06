import { Component } from '@angular/core';
import { Movie } from './models/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'movies';

  
movies:Movie[]=[
  {
    id:0,
    title:"ceva1",
    year:2022,
    price:10,
    status:true
  },

  {
    id:1,
    title:"ceva2",
    year:2022,
    price:101,
    status:false
  },

  {
    id:2,
    title:"ceva3",
    year:2022,
    price:10,
    status:true
  },

  {
    id:3,
    title:"ceva4",
    year:2022,
    price:101,
    status:false
  },

  {
    id:4,
    title:"ceva1",
    year:2022,
    price:10,
    status:true
  },

  {
    id:5,
    title:"ceva2",
    year:2022,
    price:101,
    status:false
  },

  {
    id:6,
    title:"ceva3",
    year:2022,
    price:10,
    status:true
  },

  {
    id:7,
    title:"ceva4",
    year:2022,
    price:101,
    status:false
  }
]


public handleUpdateMovie(value:{index:number,title:string,year:number,  price:number}){
  this.movies[value.index].title=value.title;
  this.movies[value.index].year=value.year;
  this.movies[value.index].price=value.price;
}

public handleSaveMovie(value:{index:number,title:string,year:number, price:number}){
  this.movies[value.index].title=value.title;
  this.movies[value.index].year=value.year;
  this.movies[value.index].price=value.price;
}

public handleDeleteMovie(value:{index:number}):void{
  this.movies.splice(value.index,1)
}

public handleAddMovie(value:{name:string, year:number, price:number}):void{

  var movie:Movie={
             id:this.movies.length,
             title:value.name,
             year:value.year,
             price:value.price,
            status:false
            }
  this.movies.push(movie);
}
}
