import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uploadApp';

  selectedFile: File;
  base64textString;

  constructor(private http: HttpClient){}


  getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  } 

  onFileChanged(event) {
    let dataImage:string;
    this.selectedFile = event.target.files[0];
    console.log("selected file:",this.selectedFile);
    this.getBase64(this.selectedFile).then(data =>this.base64textString=data)
        // return data;
        // console.log('dataImage:',dataImage);

  }


  onUpload(data) {
    // upload code goes here    this.selectedFile
    // console.log('upload done');
    const myheader=new HttpHeaders().set('x-auth', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiQW5ndWxhckJyYWhtYSIsImFjY2VzcyI6ImF1dGgiLCJpYXQiOjE1NDk0MDY3MzF9.WtnYDIE-0Kwtl9v4GGUKrVGZZXOV8m1asLrC6gk0ThU');


    this.http.post('http://localhost:3000/v1/Cloudinary/image', {picBase64:this.base64textString},{headers:myheader})
    .subscribe(result=>{
      console.log(result)
      console.log('Request served');
    });
     // this.http.get('http://localhost:3000/v1/Cloudinary/17022').subscribe(result=>{
    //   console.log(result);
    // })

  }
  
  smartSheetConnect(event){
    this.http.get('http://localhost:3000/auth').subscribe(result=>{
      console.log(result);
    })
  } 
  
}
