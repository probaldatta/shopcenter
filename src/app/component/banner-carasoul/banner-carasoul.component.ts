import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner-carasoul',
  templateUrl: './banner-carasoul.component.html',
  styleUrls: ['./banner-carasoul.component.scss']
})
export class BannerCarasoulComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    nav:true,
    navText: ['<i class="fa fa-angle-left "></i>', '<i class="fa fa-angle-right "></i>'],
    autoHeight: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
