import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-branch-map',
  templateUrl: './branch-map.component.html',
  styleUrls: ['./branch-map.component.scss']
})
export class BranchMapComponent implements OnInit {
  @Input() lat: number;
  @Input() lng: number;
  @Input() title: string;

  options: any;
  overlays: any[] = [];

  ngOnInit() {
    this.options = {
      center: { lat: this.lat, lng: this.lng },
      zoom: 15
    };

    this.overlays = [
      new google.maps.Marker({ position: { lat: this.lat, lng: this.lng }, title: this.title })
    ];
  }
}