import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ngx-dropzone',
  templateUrl: './ngx-dropzone.component.html',
  styleUrls: ['./ngx-dropzone.component.css']
})
export class NgxDropzoneComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  // ngx-dropzone
  ngOnInit(): void {
    const formData = new FormData();
    formData.append("user", "IMPERIAL_staff");
    formData.append("password", "password");
    this.http
      .post<any>("/api/login", formData)
      .subscribe(response => {
        console.log(response);
      });
  }
  files: File[] = [];
  imageUrl = null;
  onSelect(event) {
    console.log(event.addedFiles);
    this.files.push(...event.addedFiles);
    if(this.files.length > 1) {
      // this.replaceFile();
      alert('Only one image allowed');
      return false;
    }
    const formData = new FormData();
    formData.append("image", this.files[0]);
    formData.append("rescale", "true");
    this.http
      .post<any>("/api/image/partner", formData)
      .subscribe(response => {
        this.imageUrl = response.imageUrl;
        console.log(response);
      });
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  //method for replacing file
  replaceFile(){
    this.files.splice(0,1); // index =0 , remove_count = 1
  }  

}
