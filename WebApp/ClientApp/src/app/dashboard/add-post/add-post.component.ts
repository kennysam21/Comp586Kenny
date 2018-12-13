import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  @Output() postCreated = new EventEmitter<any>();
  @Input() postInfo: any;

  public buttonText = 'Save';

  constructor() { 
    this.clearPostInfo();
  }

  ngOnInit() {
  }

  private clearPostInfo = function() {
    this.postInfo = {
      id: undefined,
      date: '',
      post: ''
    };
  };

  public addOrUpdatePostRecord = function(event) {
    this.postCreated.emit(this.postInfo);
    this.clearPostInfo();
  };

}
