import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { Post } from './models/posts.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'http-requests-practice-01';
  isFetching: boolean = false;
  loadedPosts: Post[] = [];
  error = false;
  errorMessage = '';

  errorSubscription = new Subscription();

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.onFetchPosts();

    this.errorSubscription = this.postsService.error.subscribe(
      (error: Error) => {
        this.error = true;
        this.errorMessage = error.message;
      }
    );
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      (resData) => {
        this.loadedPosts = resData;
        this.isFetching = false;
      },
      (error) => {
        console.log({ error });
        this.error = true;
        this.errorMessage = error.message;
        this.isFetching = false;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = false;
    this.errorMessage = '';
  }
}
