import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, state, animate, transition, style, keyframes, query, stagger } from '@angular/animations';
import { FirebaseService } from '../services/firebase.service';
import { PostService } from '../services/post.service';
import { NewPostService } from '../services/postnew.service';


//import {Post} from '../posts/post';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  animations:[
      trigger('page', [
      transition('* => *', [
        query('.page-content', style({ opacity: 0})),

        query('.page-content', stagger('30ms', [
          animate('600ms 1.2s ease-out', style({ opacity:1}))
        ]))
      ])
    ]),
  ]
})
export class PostsComponent implements OnInit {
  
  //posts:FirebaseListObservable<Post[]>;
  //post: Post = new Post();
  submitted = false;
  session
  private memberID
  profilephoto: any;
  postCode

  categories = [
    {id:'1', name:'Public'},
    {id:'2', name:'Connections'},
    {id:'3', name:'Friends'},
  ]
  
  constructor( private newPostService:NewPostService, private service:PostService, private firebaseService:FirebaseService) { 
   
  }

  
   ngOnInit() {
     let details = JSON.parse(localStorage.getItem("userdetails"));
     this.session = details;
    
     this.memberID = details.memberID;
     let memberID = this.session.map(item => item.memberID)
     this.memberID = memberID[0]
     console.log(this.memberID)
     
     /* this.service.getAll()
     .subscribe(
      posts => {this.posts = posts
        // Display response here
      },
      error => {
          //alert('An unexpected error occured')
          // Log the unexpected errors to the database for future analysis
      }
    )
    */
  }

  
  
  newPost(post){
    //let resource = {title: input.value, url: input.value}
    this.newPostService.create(post)
    .subscribe(
      response =>{ 
      
      },
      (error: Response) => {
        if(error.status === 400){
          //this.form.setErrors(error.json())
          alert('This post already exist')
        }else{
          alert('An unexpected error occur')
        }
      }
    )
  }
/*
  deletePost(postID){
    this.service.delete(postID)
    .subscribe(
      post => {

      },
      (error: Response) => {
        if(error.status === 404){
          alert('This post has been delete')
        }else{
          alert('An unexpected error occur')
        }
      }
    )
  }
  selectFile(event) {
    const file = event.target.files.item(0)
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
*/
  /*
  upload() {
    const file = this.selectedFiles.item(0)
    this.selectedFiles = undefined
 
    this.currentPost = new Post(file);
    this.firebaseService.pushFileToStorage(this.currentPost, this.progress)
  }
*/
  photo(photo){
    console.log(photo)
  }
/*
  newCustomer(): void {
    this.submitted = false;
    this.post = new Post();
  }
 
  save() {
    this.firebaseService.createPost(this.post);
    this.post = new Post();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }

    onPost1(){
    
    let post = { message: this.message, image: this.image }
   
    this.firebaseService.createPosttest(post)
    // Return observable 
  }

  onPost(){
    
    let post = { image: this.image }
   
    this.firebaseService.createPosttest(post)
    // Return observable 
  }
  */
/**
 * 
 * ngOnInit() {
     this.service.getAll()
    .subscribe(posts => {this.posts = posts
    },error => {
      alert('An unexpected error occured')
    })
  }
 * 
 */
  
 /*
 ngOnInit() {
     this.firebaseService.getAllArticles()
    .subscribe(posts => {this.posts = posts
    },error => {
      alert('An unexpected error occured')
    })
  }
  */
  /*
  createPost(input: HTMLInputElement){
    let post:any = {title:input.value}
    input.value = '';
    this.service.create(post)
    .subscribe(
      newPost => {
        post.id = newPost.id
        this.posts.splice(0,0, post)
    }, (error: Response) => {
        if(error.status === 400){
          //this.form.setErrors(error.json())
          alert('')
        }else{
          alert('An unexpected error occured')
        }
    })
  }

  updatePost(post){
    this.service.update(post)
    .subscribe(
      response => {
      console.log(response)
    }, error => {
      alert('An unexpected error occured')
    })
  }

  deletePost(id){
    this.service.delete(id)
    .subscribe(
      response => {
      let index = this.posts.indexOf(id)
      this.posts.splice(index, 1);
    }, (error: AppError) => {
        if(error instanceof NotFoundError){
          alert('This post has already been deleted')
        }else{
          alert('An unexpected error occured')
        }
        
    })
  }
*/
}
