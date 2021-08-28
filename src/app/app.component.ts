import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from './models/post.model';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts$!: Observable<Array<Post>>;
  pagination = {
    page: 0,
    perPage: 10
  }
  maxPages: number = 0;
  constructor(private readonly dataService: DataService) {}
  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    this.posts$ = this.dataService.getAllPosts(this.pagination.perPage, this.pagination.page).pipe(
      tap(paginatedResponse => this.maxPages = paginatedResponse.paginationInfo.pages),
      map(paginatedResponse => paginatedResponse.data)
    );
  }

  trackPostBy(index: number, post: Post): number {
    return post.id;
  }

  onPageChange(): void {
    if(this.pagination.page + 1 > this.maxPages) return;
    this.pagination.page += 1;
    this.getPosts();
  }
}
