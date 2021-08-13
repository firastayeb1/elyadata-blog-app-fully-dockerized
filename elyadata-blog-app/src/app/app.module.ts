import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LinkifyPipe } from "../app/modules/urlPipe";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { BlogService } from "../app/services/blog.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogCardComponent,
    BlogDetailsComponent,
    BlogFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    BlogService,
    LinkifyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
