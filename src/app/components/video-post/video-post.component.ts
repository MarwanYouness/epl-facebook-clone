import { Component, Input, OnInit } from '@angular/core';
import { defaultPost, Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-video-post',
  templateUrl: './video-post.component.html',
  styleUrls: ['./video-post.component.scss']
})
export class VideoPostComponent implements OnInit {
  @Input() post: Post | undefined;
  constructor() { }

  ngOnInit() {
  }

}
