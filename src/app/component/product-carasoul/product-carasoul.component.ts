import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-carasoul',
  templateUrl: './product-carasoul.component.html',
  styleUrls: ['./product-carasoul.component.scss']
})
export class ProductCarasoulComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  customOptions1:OwlOptions={
    loop: false,
    autoplay: false,
    center: false,
    slideBy:4,
    margin:20,
    dots: false,
    nav:true,
    navText: ['<i class="fa fa-angle-left "></i>', '<i class="fa fa-angle-right "></i>'],
    autoHeight: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 4,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 4,
      },
    },
  }
}
