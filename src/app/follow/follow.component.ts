import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.css']
})
export class FollowComponent  {
  @Input('isFollow') isFollow: Boolean;
  
  onClick(){
    this.isFollow = !this.isFollow
  }
}
