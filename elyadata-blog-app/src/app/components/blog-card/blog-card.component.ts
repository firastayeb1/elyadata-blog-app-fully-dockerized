import { Component, Input, OnInit } from '@angular/core';
import { Blog } from "../../modules/blog";
import { BlogCard, BlogToBlogCard } from "./module-view/blog-card-module";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {

  @Input()
  blog: Blog | undefined;

  blogCard: BlogCard | undefined;
  constructor(private blogService:BlogService) { }

  ngOnInit(): void {
    this.blogCard = BlogToBlogCard(this.blog);
  }

  like(){
    this.blog!.likes =  1 + (+this.blog!.likes);
    this.blogService.updateBlog(this.blog!);
    this.blogCard = BlogToBlogCard(this.blog);
  }
  dislike(){
    this.blog!.dislikes= 1 + (+this.blog!.dislikes);
    this.blogService.updateBlog(this.blog!);
    this.blogCard = BlogToBlogCard(this.blog);
  }

}
