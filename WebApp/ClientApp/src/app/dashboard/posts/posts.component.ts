import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  public postData: Array<any>;
  public currentData: any;

  constructor (private postsService: PostsService) {
    postsService.get().subscribe((data: any) => this.postData = data);
    this.currentData = this.setInitialValuesForPostData();
  }

  private setInitialValuesForPostData () {
    return {
      id: undefined,
      date: '',
      post: ''
    }
  }

  public createOrUpdatePosts = function(post: any) {
    let postWithId;
    postWithId = _.find(this.postData, (el => el.id === post.id));

    if (postWithId) {
      const updateIndex = _.findIndex(this.postData, {id: postWithId.id});
      this.postsService.update(post).subscribe(
        postRecord =>  this.postData.splice(updateIndex, 1, post)
      );
    } else {
      this.postsService.add(post).subscribe(
        postRecord => this.postData.push(post)
      );
    }

    this.currentData = this.setInitialValuesForPostData();
  };

  public editClicked = function(record) {
    this.currentData = record;
  };

  public newClicked = function() {
    this.currentData = this.setInitialValuesForPostData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.postData, {id: record.id});
    this.postsService.remove(record).subscribe(
      result => this.postData.splice(deleteIndex, 1)
    );
  }

}
