import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { PaginatedResponse } from '../models/paginated-response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly httpClient: HttpClient) { }

  getAllPosts(perPage = 10, page = 0): Observable<PaginatedResponse<Array<Post>>> {
    return this.httpClient.get('assets/data.json').pipe(
      map((res: any) => {
        return {
          paginationInfo: {
            pages: Math.ceil(res.length / perPage)
          },
          data: res.slice(0, ((page * perPage) + perPage)) as Array<Post>
        }
      }));
  }
}
