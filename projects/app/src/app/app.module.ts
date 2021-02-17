import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DropzoneModule, DropzoneConfigInterface,
  DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';

import { AppComponent } from './app.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AngularFileUploaderComponent } from './angular-file-uploader/angular-file-uploader.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxDropzoneComponent } from './ngx-dropzone/ngx-dropzone.component';
import { NgxFileDropComponent } from './ngx-file-drop/ngx-file-drop.component';
import { NgxFileDropModule } from 'ngx-file-drop';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: 'https://httpbin.org/post',
  acceptedFiles: 'image/*',
  createImageThumbnails: true
};

@NgModule({
    bootstrap: [
      AppComponent
    ],
    declarations: [
      AppComponent,
      AngularFileUploaderComponent,
      NgxDropzoneComponent,
      NgxFileDropComponent
    ],
    imports: [
      DropzoneModule,
      BrowserModule,
      FlexLayoutModule,
      AngularFileUploaderModule,
      NgxDropzoneModule,
      NgxFileDropModule
    ],
    exports: [
    ],
    providers: [
      {
        provide: DROPZONE_CONFIG,
        useValue: DEFAULT_DROPZONE_CONFIG
      }
    ]
})
export class AppModule {}
