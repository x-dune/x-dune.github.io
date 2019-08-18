import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  toggleHamburgerMenu() {
    if (!matchMedia("(min-width: 1088px)").matches) {
      document.getElementById("navBurger").classList.toggle("is-active");
      document.getElementById("navMenu").classList.toggle("is-active");
    }
  }
}
