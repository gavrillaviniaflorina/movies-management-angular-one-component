import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {

  updateActive=false;
  title:string="";
  //@ts-ignore
  year:number;
   //@ts-ignore
  price:number;

  @Input() movie:Movie={
    id:0,
    title:"",
    year:0,
    price:0,
    status:false
  }


  @Output() deleteMovie=new EventEmitter<{index:number}>();
  @Output() updateMovie=new EventEmitter<{index:number,title:string,year:number,price:number}>();
  @Output() saveMovie=new EventEmitter<{index:number,title:string,year:number, price:number}>();

  ngOnInit(): void {
  }



  public onDeleteMovie():void{
    this.deleteMovie.emit({
      index:this.movie.id
    })
  }

  public onUpdateMovie():void{   
    this.updateActive=true;
    this.updateMovie.emit({
      index:this.movie.id,
      title:this.movie.title,      
      year:this.movie.year,
      price:this.price
    })
  }
  
    public onSaveMovie():void{   
      this.updateActive=false;
      this.updateMovie.emit({
        index:this.movie.id,
        title:this.title,      
        year:this.year,
        price:this.price
      })
    }
 





}
