import { Component, OnInit } from "@angular/core";
import {
  js,
  nodejs,
  php,
  sass,
  bootstrap,
  materialize,
  bulma,
  react,
  vuejs,
  angular,
  apollo,
  express,
  nextjs,
  laravel,
  graphql,
  mongodb,
  mysql,
  postgresql,
  git,
  github,
  heroku,
  postman,
  json
} from "src/assets/skills/skillsUtilities";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"]
})
export class SkillsComponent implements OnInit {
  boxRender = [
    {
      title: "Language",
      skills: [js, nodejs, php]
    },
    {
      title: "CSS",
      skills: [sass, bootstrap, materialize, bulma]
    },
    {
      title: "JavaScript (Front-End)",
      skills: [react, vuejs, angular, apollo]
    },
    {
      title: "Back-End",
      skills: [express, nextjs, laravel, graphql]
    },
    {
      title: "Database",
      skills: [mongodb, mysql, postgresql]
    },
    {
      title: "Other",
      skills: [git, github, heroku, postman, json]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
