import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import {Post} from '../posts/post';
import * as firebase from 'firebase';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class FirebaseService {
  
  posts: FirebaseListObservable<Post[]> = null;
  private basePath: string = '/postimages';
  //folder: any;
  
  constructor(private db: AngularFireDatabase) { }

  pushFileToStorage(post: Post, progress: {percentage: number}) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${this.basePath}/${post.file.name}`).put(post.file);
 
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        // in progress
        const snap = snapshot as firebase.storage.UploadTaskSnapshot
        progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100)
      },
      (error) => {
        // fail
        console.log(error)
      },
      () => {
        // success
        post.url = uploadTask.snapshot.downloadURL
        post.name = post.file.name
        this.saveFileData(post)
      }
    );
  }

  private saveFileData(post: Post) {
    this.db.list(`${this.basePath}/`).push(post)
  }

  getPosts(query = {}): FirebaseListObservable<Post[]> {
    this.posts = this.db.list(this.basePath, {
      query: query
    });
    return this.posts;
  }
  /*
  getPost(key: string): FirebaseObjectObservable<Post> {
    this.post = this.db.object(`${this.dbPath}/${key}`);
    return this.post;
  }
  */

  
/*
  createPosttest(post){
    // Create rootref
    this.posts.push(post)
  
    let storageRef = firebase.storage().ref()
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`
      let iRef = storageRef.child(path)
      iRef.put(selectedFile).then((snapshot) => {
        post.image = selectedFile.name;
        post.path = path;
        return this.posts.push(post)
      })
    } 
  }

  */

  createPost(post: Post): void {
    this.posts.push(post)
    .catch(error => this.handleError(error));
  }

  updatePost(key: string, value: any): void {
    this.posts.update(key, value).catch(error => this.handleError(error));
  }

  deletePost(key: string): void {
    this.posts.remove(key).catch(error => this.handleError(error));
  }

  deleteAll(): void {
    this.posts.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
