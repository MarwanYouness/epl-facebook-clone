import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { defaultPost, Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-generic-post',
  templateUrl: './generic-post.component.html',
  styleUrls: ['./generic-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericPostComponent implements OnInit {
  @Input() post: Post | undefined;
  
  constructor() { }

  ngOnInit() {
  }

}
