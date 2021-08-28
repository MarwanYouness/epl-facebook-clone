import { Component, Input, OnInit } from '@angular/core';
import { defaultPost, Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-image-post',
  templateUrl: './image-post.component.html',
  styleUrls: ['./image-post.component.scss']
})
export class ImagePostComponent implements OnInit {
  @Input() post: Post | undefined;
  constructor() { }

  ngOnInit() {
    console.log(this.post)
  }

}
