import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { BlogService } from "../../services/blog.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {

  blogForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    author: new FormControl('', [Validators.required,  Validators.maxLength(15)]),
    content: new FormControl('', [Validators.required,  Validators.maxLength(1000)]),
    img: new FormControl('', []),
  })
  constructor(private blogService:BlogService, private _router: Router,) { }

  get titleInput() {return this.blogForm.get('title')}
  get authorInput() {return this.blogForm.get('author')}
  get contentInput() {return this.blogForm.get('content')}
  get imgInput() {return this.blogForm.get('img')}

  InputErrorMsg(fieldName: string){
    var fieldErrors = this.blogForm.get(fieldName)?.errors;
    if (fieldErrors){
      if(fieldErrors['max']){
        return `The max value is ${fieldErrors['max']['max']} !`;
      }else
      if(fieldErrors['required']){
        return ``;
      }else
      if(fieldErrors['maxlength']){
        return `The length value is ${fieldErrors['maxlength']['requiredLength']} letters !`;
      }else{
        return `input error!`;
      }
    }else{
      return '';
    }
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.blogService.addBlog(this.blogForm.value);
    this._router.navigate(['home']);
  }

}
