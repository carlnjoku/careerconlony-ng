import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent  {
  @Input('likeCount') likeCount: number;
  @Input('isLiked') isLiked: Boolean;
  @Output() change = new EventEmitter()
  


  onClick(){
    this.likeCount += (this.isLiked) ? -1 : 1;
    this.isLiked = !this.isLiked;
    this.change.emit(this.isLiked)
  }

  
  
}
