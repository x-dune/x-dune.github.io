import { default as image } from "./sideProjectImagePath"

const sideProject = [
  {
    title: "LBlog",
    subtitle:
      "A blog powered by Laravel. Featuring User Authentication, Data Verification and User Profile Customization",
    techs: [image.laravel, image.postgres, image.bootstrap],
    img: "images/side-project/lblog1.png",
    links: {
      live: "https://generic-lblog.herokuapp.com",
      source: "https://github.com/adamdune/lblog",
    },
  },
  {
    title: "SpaceX API View",
    subtitle:
      "An application that frames the data exposed by r/SpaceX API into a simple user interface.",
    techs: [
      image.react,
      image.nodejs,
      image.express,
      image.graphql,
      image.apollo,
      image.bootstrap,
    ],
    img: "images/side-project/spacex1.png",
    links: {
      live: "https://spacex-api-view.herokuapp.com/",
      source: "https://github.com/adamdune/SpaceX-API-View",
    },
  },
  {
    title: "Poll App",
    subtitle:
      "A simple poll application that uses server rendered React which interfaces with a REST API.",
    techs: [
      image.react,
      image.nodejs,
      image.nextjs,
      image.express,
      image.mongodb,
      image.materialize,
    ],
    img: "images/side-project/poll1.png",
    links: {
      live: "https://generic-poll-app.herokuapp.com/",
      source: "https://github.com/adamdune/poll_app_2",
    },
  },
]

export default sideProject
