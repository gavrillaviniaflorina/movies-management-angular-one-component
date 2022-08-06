import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.sass']
})
export class AddMovieComponent implements OnInit {

  @Output() addMovie=new EventEmitter<{name:string, year:number, price:number}>();
  name:string="";
  //@ts-ignore
  year:number; 
   //@ts-ignore
  price:number;
  constructor() { }

  ngOnInit(): void {
  }

  public onAddMovie():void{
    this.addMovie.emit({
      name:this.name,
      year:this.year,
      price:this.price
    })

    this.name="";
  }

}
