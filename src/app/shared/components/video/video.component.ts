import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
    selector: 'video-component',
    templateUrl: 'video.component.html',
    styleUrls: ['video.component.scss']
})

export class VideoComponent implements OnInit, AfterViewInit {
    constructor(
        private elRef: ElementRef
    ) { }

    ngOnInit() { 
    }

    ngAfterViewInit() {
        const video: HTMLVideoElement = this.elRef.nativeElement.querySelector('#videoElement');
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.play().catch(error => {
            console.error('Error attempting to play video:', error);
        });
    }

}