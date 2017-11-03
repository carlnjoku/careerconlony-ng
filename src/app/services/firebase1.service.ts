import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import * as firebase from 'firebase';


@Injectable()
export class Firebase1Service {

  private posts: FirebaseListObservable<any[]>
  
  post: FirebaseListObservable<any[]>
  folder: any;
  constructor(private db: AngularFireDatabase) {
    this.folder = 'postimages'
   }

   
  
  addPost(post){
    // Create root ref
    let storageRef = firebase.storage().ref();
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

  

}

interface Post{
  $key?: string;
  title?: string;
  message?: string;
  image?: string;
}
