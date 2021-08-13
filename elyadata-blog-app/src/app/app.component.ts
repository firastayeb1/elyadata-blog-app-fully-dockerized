import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LinkifyPipe } from "../app/modules/urlPipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elyadata-blog-app';

  filterWord = ''
  constructor(private _router: Router, private linkifyPipe:LinkifyPipe) { }

  search(){
    console.log('this.filterWord', this.filterWord)
    if (this.filterWord && this.filterWord.length !=0 ){
      this._router.navigate(['home/'+ this.linkifyPipe.transform(this.filterWord)]);
    }else{
      this._router.navigate(['home/']);
    }
  }
}
