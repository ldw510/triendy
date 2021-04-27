import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  public id : string ;
  
  ngOnInit(): void {
    $(document).ready(function () {
      $(document).click(function (event) {
          var clickover = $(event.target);
          var _opened = $(".navbar-collapse").hasClass("show");
          if (_opened === true && !clickover.hasClass("navbar-toggler")) {
              $(".navbar-toggler").click();
          }
      });
    });
  
    $(document).on('scroll', function () {
      if ($(document).scrollTop() > 86) {
        $('#banner').addClass('shrink');
      } else {
        $('#banner').removeClass('shrink');
      }
    });

    $('#menu li').on('click', function(){
      $('#menu li.active').removeClass('active');
      $(this).addClass('active');
    });
  }
 nav(id){
   document.getElementById(id).scrollIntoView()
 }
}
