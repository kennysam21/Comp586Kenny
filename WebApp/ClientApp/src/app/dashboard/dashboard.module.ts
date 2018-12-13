import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { SharedModule }       from '../shared/modules/shared.module';

import { routing }  from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';

import { AuthGuard } from '../auth.guard';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import {PostsService} from './services/posts.service';
import * as _ from 'lodash';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing,
    SharedModule,
    HttpClientModule
  ],
  declarations: [RootComponent,HomeComponent, PostsComponent, AddPostComponent, ShowPostsComponent],
  exports:      [ ],
  providers:    [AuthGuard,DashboardService, PostsService]
})
export class DashboardModule { }
