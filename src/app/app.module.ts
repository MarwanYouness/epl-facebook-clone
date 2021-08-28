/** core modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/** material modules */
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
/** other modules */
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

/** components */
import { AppComponent } from './app.component';

import { GenericPostComponent } from './components/generic-post/generic-post.component';
import { VideoPostComponent } from './components/video-post/video-post.component';
import { TextPostComponent } from './components/text-post/text-post.component';
import { ImagePostComponent } from './components/image-post/image-post.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GenericPostComponent,
    TextPostComponent,
    ImagePostComponent,
    VideoPostComponent,
    SanitizeUrlPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    InfiniteScrollModule,
    MatCardModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
