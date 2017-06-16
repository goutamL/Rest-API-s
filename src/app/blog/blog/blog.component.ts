import { Component, OnInit } from '@angular/core';
import { PostService } from "../post.service";
import {post} from "./post";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [PostService]
})
export class BlogComponent implements OnInit {

  posts: post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postService.getPosts().subscribe(res => {

      this.posts = res as post[];

    }, err => {
      console.log(err);
    })
  }

}
