
export class Post {
  $key: string;
  title: string;
  name: string;
  message: string;
  age: number;
  url: string;
  image: string;
  file: File;
  active: boolean = true;

  constructor(file: File) {
    this.file = file;
  }
}