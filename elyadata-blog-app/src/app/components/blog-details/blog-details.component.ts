import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../services/blog.service";
import { Blog } from "../../modules/blog";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  blog: Blog|undefined;
  subscriptions: Subscription[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (params) => {
      const id = params['id'];
      await this.blogService.FetchBlogById(id).then((data)=>{
        this.blog = data as Blog;
        return data;
      })
      if (!this.blog){
        this._router.navigate(['home']);
      }
    });
  }

  ngOnDestroy(){
    this.subscriptions.forEach((subscription)=>{
      subscription.unsubscribe();
    })
  }


}
