import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { Blog } from "../../modules/blog";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  blogs: Blog[] = []
  subscriptions: Subscription[] = [];

  constructor(private blogService:BlogService, private activatedRoute: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.blogService.fetchBlogs().then((data)=>{
      this.blogs = data;
    });
    this.activatedRoute.params.subscribe(params => {
      const filterWord = params['filterWord'];
      this.filterBlogs( filterWord)
    });
  }

  async filterBlogs(filterWord: string){
    await this.blogService.fetchBlogs().then((data)=>{
      this.blogs = data;
      return data;
    });    
    var newBlogs: Blog[] = [];
    if (filterWord && filterWord.length > 0 ){
      this.blogs.forEach((blog)=>{
        if ( blog.title.toLowerCase().indexOf(filterWord.toLowerCase())!== -1 || 
            blog.author.toLowerCase().indexOf(filterWord.toLowerCase())!== -1 || 
            blog.content.toLowerCase().indexOf(filterWord.toLowerCase())!== -1){

          newBlogs.push(blog);
        }
      })
      this.blogs = newBlogs;
    }else{
      await this.blogService.fetchBlogs().then((data)=>{
        this.blogs = data;
        return data;
      });   
    }
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription)=>{
      subscription.unsubscribe();
    })
  }

}
