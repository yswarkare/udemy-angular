import { Injectable } from '@angular/core';
import { Post } from './models/posts.model';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<Error>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const newPost: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://udemy-angular-backend-87496-default-rtdb.firebaseio.com/posts.json',
        newPost,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData.body);
        },
        (error: Error) => {
          this.error.next(error);
        }
      );
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{ [key: string]: Post }>(
        'https://udemy-angular-backend-87496-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'hello' }),
          params: searchParams,
        }
      )
      .pipe(
        map((resData) => {
          const postsArray: Post[] = [];
          for (const key in resData) {
            postsArray.push({ ...resData[key], id: key });
          }
          return postsArray;
        }),
        catchError((errorRes) => {
          // Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http
      .delete(
        'https://udemy-angular-backend-87496-default-rtdb.firebaseio.com/posts.json',
        { observe: 'events', responseType: 'json' }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Sent) {
            console.log(event);
          }
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
