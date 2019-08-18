import { Component, OnInit } from "@angular/core";
import {
  laravel,
  postgresql,
  bootstrap,
  react,
  nodejs,
  express,
  graphql,
  apollo,
  nextjs,
  mongodb,
  materialize
} from "src/assets/skills/skillsUtilities";

import { lblog1, spacex1, poll1, mobot1 } from "src/assets/imagePaths";

@Component({
  selector: "app-featured",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.scss"]
})
export class FeaturedComponent implements OnInit {
  cardRender = [
    {
      title: "LBlog",
      subtitle:
        "A blog powered by Laravel. Featuring User Authentication, Data Verification and User Profile Customization",
      techs: [laravel, postgresql, bootstrap],
      img: lblog1,
      links: {
        live: "https://generic-lblog.herokuapp.com",
        source: "https://github.com/adamdune/lblog"
      }
    },
    {
      title: "SpaceX API View",
      subtitle:
        "An application that frames the data exposed by r/SpaceX API into a simple user interface.",
      techs: [react, nodejs, express, graphql, apollo, bootstrap],
      img: spacex1,
      links: {
        live: "https://spacex-api-view.herokuapp.com/",
        source: "https://github.com/adamdune/SpaceX-API-View"
      }
    },
    {
      title: "Poll App",
      subtitle:
        "A simple poll application that uses server rendered React which interfaces with a REST API.",
      techs: [react, nodejs, nextjs, express, mongodb, materialize],
      img: poll1,
      links: {
        live: "https://generic-poll-app.herokuapp.com/",
        source: "https://github.com/adamdune/poll_app_2"
      }
    },
    {
      title: "Mobot the TwitterBot",
      subtitle:
        "A super simple bot that runs off the Twitter API. It replies to simple commands and tweets a Dota 2 voice line every day.",
      techs: [nodejs],
      img: mobot1,
      links: {
        live: "https://twitter.com/localhost3002",
        source: "https://github.com/adamdune/mobot_twitterbot"
      }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
