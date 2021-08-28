import { Component, Input, OnInit } from '@angular/core';
import { defaultPost, Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-text-post',
  templateUrl: './text-post.component.html',
  styleUrls: ['./text-post.component.scss']
})
export class TextPostComponent implements OnInit {
  @Input() post: Post | undefined;
  constructor() { }

  ngOnInit() {
  }

}
