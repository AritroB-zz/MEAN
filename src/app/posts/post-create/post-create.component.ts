import { Component } from '@angular/core'
import { AttachSession } from 'protractor/built/driverProviders';
import { ThrowStmt } from '@angular/compiler';

import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {}

  onAddPost(form: NgForm) {
    if(form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPosts(form.value.title, form.value.content);
    form.resetForm();
  }
}
