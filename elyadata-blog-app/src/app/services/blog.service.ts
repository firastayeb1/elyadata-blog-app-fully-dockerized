import { Injectable } from '@angular/core';
import { Blog } from "../modules/blog";
import { v4 as uuidv4 } from 'uuid';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  fakeBlogs: Blog[]= [];
  optionRequest = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'*'
    })
  };

  constructor(private http: HttpClient) { 
    this.fakeBlogs.push(new Blog('1', 'First Blog', 'First Content', 'Firas',0, 0, undefined));
    this.fakeBlogs.push(new Blog('2', 'Second Blog', 'Second Content', 'Oussama',0, 0, undefined));
  }

  fetchBlogs(): Promise<any>{
    return this.http.get(environment.apiUrl, this.optionRequest).toPromise();
    //return this.fakeBlogs;
  }
  FetchBlogById(id : string){
    return this.http.get(environment.apiUrl + 'fetchBlogById/' + id, this.optionRequest).toPromise();
    //var blog: Blog;
    /*for (let blog of this.fakeBlogs){
      if (blog.id === id){
        return blog;
      };
    }
    return undefined;*/
  }

  updateBlog(blog : Blog): Promise<any>{
    //var blog: Blog;
    return this.http.put(environment.apiUrl + 'updateTuto', blog, this.optionRequest).toPromise();
    /*var newBlogs: Blog[] = [];
    for (let blogToFind of this.fakeBlogs){
      if (blogToFind.id === blog.id){
        newBlogs.push(blog);
      }else{
        newBlogs.push(blogToFind);
      };
      
    }
    this.fakeBlogs = newBlogs;
    return undefined;*/
  }

  addBlog(newBlog: Blog){
    return this.http.post(environment.apiUrl + 'addTuto', newBlog, this.optionRequest).toPromise();
    /*newBlog.id = uuidv4();
    this.fakeBlogs.push(newBlog);*/
  }
  
}
