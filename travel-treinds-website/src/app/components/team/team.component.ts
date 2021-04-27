import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  slides = [
    {
      clientPhoto: "assets/images/client-josh.png", 
      clientName: "Josh Mudway",
      clientDesignation: "COO",
      clientDetails: "The foodie of the group, Josh travels to different corners of the world to taste the local delicacies. When he's not serving himself up a meal he is running the commercial operations for Triend.",
      clientInsta: "https://instagram.com/josh_mudway?igshid=ps2zhvtd7qfw",
      clientLink: "https://www.linkedin.com/in/josh-mudway-80b69a9a/"
    },
    
    {
      clientPhoto: "assets/images/client-matt.png", 
      clientName: "Matthew Hairsnape",
      clientDesignation: "CEO",
      clientDetails: "Lover of all things music and travel. Co-Founder of a music tourism company, Matt founded Beats Travel when working for an adventure tour operator in Croatia. Matt feels travel is all about the unique experiences you find in different locations!",
      clientInsta: "https://instagram.com/matt_beatstraveller?igshid=vt97azhicpfr",
      clientLink: "https://www.linkedin.com/in/matthew-hairsnape-63640996/"
    },
    
    {
      clientPhoto: "assets/images/client-thisura.png", 
      clientName: "Thisura Herath",
      clientDesignation: "Business Development",
      clientDetails: "A part of our business dev team, Thisura has used Lockdown to really explore his home of London more. A fan of Staycation he likes to explore his local surroundings.",
      clientInsta: "https://instagram.com/thisurah?igshid=hz4f9fv1i3d0",
      // clientLink: "https://www.linkedin.com/in/thisura-herath/"
    },
    
    {
      clientPhoto: "assets/images/client-camilla.png", 
      clientName: "Camilla Smith",
      clientDesignation: "Business Development",
      clientDetails: "A lover of Marine life. Camilla is a lover of scuba diving and the ocean and has completed a marine conservation course in Egypt. Outside of the water, Camilla works on business development for Triend. ",
      clientInsta: "https://instagram.com/1999camillas?igshid=1e4r9yjngvnhl",
      // clientLink: "https://www.linkedin.com/in/camilla-s-70b895101/"
    },
    
    {
      clientPhoto: "assets/images/client-hannah.png", 
      clientName: "Hannah Cookson",
      clientDesignation: "Marketing Outreach",
      clientDetails: " Hannah works with us on influencer outreach and marketing. Over lockdown, she picked up yoga and loves the mindset that it gives you. ",
      clientInsta: "https://instagram.com/hannahcookson_?igshid=1dmmx48jka79e",
      // clientLink: "https://www.linkedin.com/in/hannah-cookson-121499151/"
    },
    
    {
      clientPhoto: "assets/images/client-sam.png", 
      clientName: "Samuel Aguilar",
      clientDesignation: "Product Design",
      clientDetails: "Born in Spain, lived in Italy and now live in London.  Sam works on product design & UX research. He loves to travel and live in new places. ",
      clientInsta: "https://instagram.com/samuaguilar?igshid=1684zc4vlh1yu",
      // clientLink: "https://www.linkedin.com/in/matthew-hairsnape-63640996/"
    },
    
    {
      clientPhoto: "assets/images/client-alex.png", 
      clientName: "Alex Cheswick",
      clientDesignation: "Marketing Outreach",
      clientDetails: "3 big passions! Sustainability, Travel, and Fashion. Have recently returned from travelling Southeast Asia, Australia and New Zealand, Alex works on outreach and marketing for the team. ",
      clientInsta: "https://instagram.com/ajcheswick?igshid=1wma2q0i0pohu",
      // clientLink: "https://www.linkedin.com/in/alex-cheswick-98554017a/"
    },
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 1200,

      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        },
        
        {
          breakpoint: 480,
          settings: {
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
  }; 

  constructor() { }

  ngOnInit(): void {
  }

}
