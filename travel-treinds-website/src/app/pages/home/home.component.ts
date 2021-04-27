import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})

export class HomeComponent implements OnInit, AfterViewInit {
  public extraFeatureImage = "assets/images/feature-phn-6.png";
  public videoEl: any;
  public videoBanner: any = "https://www.triendtravel.com/videos/Dana-NZ.mp4";
  public isPlayPauseButton: boolean = true;
  @ViewChild("bannerVideo") bannerVideo: ElementRef;

  slides = [
    {
      trendPerson: "assets/images/trending-c-1.png",
      trendName: "James Strong",
      trendDate: "Adventure Traveller",
      trendEvent: "assets/images/trending-1.png",
      trendDetail: "Vietnam Heaven",
    },

    {
      trendPerson: "assets/images/trending-c-2.png",
      trendName: "George Stewart",
      trendDate: "Music Traveller",
      trendEvent: "assets/images/trending-2.png",
      trendDetail: "Summer Raves",
    },

    {
      trendPerson: "assets/images/trending-c-3.png",
      trendName: "Chantelle Summer",
      trendDate: "Adventure Traveller",
      trendEvent: "assets/images/trending-3.png",
      trendDetail: "Italy - My Second Love",
    },

    {
      trendPerson: "assets/images/trending-c-4.png",
      trendName: "Ryan McCormick",
      trendDate: "Wellness Traveller",
      trendEvent: "assets/images/trending-4.png",
      trendDetail: "Brisbane Surf Trip",
    },

    {
      trendPerson: "assets/images/trending-c-5.png",
      trendName: "Ray Leahy",
      trendDate: "Cultural Traveller",
      trendEvent: "assets/images/trending-5.png",
      trendDetail: "Rio",
    },

    {
      trendPerson: "assets/images/trending-c-6.png",
      trendName: "Sara Wallace",
      trendDate: "Urban Traveller",
      trendEvent: "assets/images/trending-6.png",
      trendDetail: "5 days in Budapest",
    },

    {
      trendPerson: "assets/images/trending-c-7.png",
      trendName: "Joel Abebe",
      trendDate: "Eco Traveller",
      trendEvent: "assets/images/trending-7.png",
      trendDetail: "Land of Ice and Fire",
    },

    {
      trendPerson: "assets/images/trending-c-8.png",
      trendName: "Kateryna Boyko",
      trendDate: "Adventure Traveller",
      trendEvent: "assets/images/trending-8.png",
      trendDetail: "Jungle Trek 2020",
    },

    {
      trendPerson: "assets/images/trending-c-9.png",
      trendName: "Tom Pitt",
      trendDate: "Eco Traveller",
      trendEvent: "assets/images/trending-9.png",
      trendDetail: "My Hiking Adventure",
    },

    {
      trendPerson: "assets/images/trending-c-10.png",
      trendName: "Alyce Roberts",
      trendDate: "Adventure Traveller",
      trendEvent: "assets/images/trending-10.png",
      trendDetail: "Viva La Mexico",
    },

    // {
    //   trendPerson: "assets/images/trending-c-11.png",
    //   trendName: "Sarah Smith",
    //   trendDate: "Feb 2019",
    //   trendEvent: "assets/images/trending-11.png",
    //   trendDetail: "European Road Trip"
    // },

    {
      trendPerson: "assets/images/trending-c-12.png",
      trendName: "Lisa Beddington",
      trendDate: "Culinary Traveller",
      trendEvent: "assets/images/trending-12.png",
      trendDetail: "French Summer 2020",
    },

    {
      trendPerson: "assets/images/trending-c-13.png",
      trendName: "Rebecca Ward",
      trendDate: "Urban Traveller",
      trendEvent: "assets/images/trending-13.png",
      trendDetail: "Turkish Delights For Life",
    },

    // {
    //   trendPerson: "assets/images/trending-c-14.png",
    //   trendName: "Vanessa Nickson",
    //   trendDate: "Feb 2019",
    //   trendEvent: "assets/images/trending-14.png",
    //   trendDetail: "My Trip To Paradise"
    // },

    {
      trendPerson: "assets/images/trending-c-15.png",
      trendName: "Joseph Legge",
      trendDate: "Sustainable Traveller",
      trendEvent: "assets/images/trending-15.png",
      trendDetail: "Waterfall Hunting",
    },
  ];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1200,

    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  videos = [

    {
      ClientName: "Dana",
      ClientDate: "31k",
      ClientImg: "assets/images/dana-header.png",
      ClientVideo: "https://www.triendtravel.com/videos/Dana-NZ.mp4",
      ClintDes: "NZ",
      Clientposter: "assets/images/loading.svg",
    },


  ];

  videoConfig = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,

    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 480,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  constructor(private elem: ElementRef) {}
  
  ngAfterViewInit() {
    this.elem.nativeElement.querySelectorAll('.slick-current video')[0].play()
    if(document.getElementsByClassName("slick-next").length > 0){
      let next = document.getElementsByClassName("slick-next")[0];
      next.addEventListener("click", ()=>{
        for(let i = 0; i<this.elem.nativeElement.querySelectorAll(".slick-slide video").length;i++){
          this.elem.nativeElement.querySelectorAll(".slick-slide video")[i].pause();
          }
        if(document.getElementsByClassName("slick-current").length > 0){
          if(this.isPlayPauseButton){
            this.elem.nativeElement.querySelectorAll('.slick-current video')[0].play();   
          }else{
            this.bannerVideo.nativeElement.pause();
          }
          let src = document.querySelector('.slick-current video').getAttribute("src")     
          if(src)
           this.videoBanner = src  
        }
      })
    }
    if(document.getElementsByClassName("slick-prev").length > 0){
      let next = document.getElementsByClassName("slick-prev")[0];
      next.addEventListener("click", ()=>{
        for(let i = 0; i<this.elem.nativeElement.querySelectorAll(".slick-slide video").length;i++){
          this.elem.nativeElement.querySelectorAll(".slick-slide video")[i].pause();
          }
        if(document.getElementsByClassName("slick-current").length > 0){
          if(this.isPlayPauseButton){
            this.elem.nativeElement.querySelectorAll('.slick-current video')[0].play() 
          }else{
            this.bannerVideo.nativeElement.pause();
          }
          let src = document.querySelector('.slick-current video').getAttribute("src")     
             if(src)
              this.videoBanner = src  
        }
      })
    }
    // document.getElementById("bannerTop").click();
    // setTimeout(() => {
    //   this.bannerVideo.nativeElement.play();
    // }, 3000);
  }

  changeExtraFeaureImages(imgUrl) {
    this.extraFeatureImage = "assets/images/" + imgUrl;
  }

  ngOnInit(): void {

    window.scrollTo({
      top: 0,
    });

    $(function() {
      $("video").each(function(){ this.volume = 0.0; });
    });

    console.log(this.videoBanner);
  }

  changeBannerVideo(video) {
    this.videoBanner = video;
  }

  playFirstBanner() {
    if(this.isPlayPauseButton){
      this.bannerVideo.nativeElement.pause();
      this.elem.nativeElement.querySelectorAll('.slick-current video')[0].pause()
    }else{
      this.bannerVideo.nativeElement.play();
      this.elem.nativeElement.querySelectorAll('.slick-current video')[0].play()
    }
    this.isPlayPauseButton = !this.isPlayPauseButton;
  }

  afterChangeSlider(event){
    if(document.getElementsByClassName("slick-current").length > 0){
      if(this.isPlayPauseButton){
        this.elem.nativeElement.querySelectorAll('.slick-current video')[0].play();  
      }else{
        this.bannerVideo.nativeElement.pause();
      }
      let src = document.querySelector('.slick-current video').getAttribute("src")     
        if(src)
         this.videoBanner = src   
    }
  }
}
