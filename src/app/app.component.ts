import { Component, Injector, OnInit } from "@angular/core";
import { BaseService } from "./services/base/base.service";
import { ThemeService } from "./services/themes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent extends BaseService {
  constructor(public _theme: ThemeService, private _injector: Injector) {
    super(_injector);

    this.checkThemeI();
  }

  ngOnInit(): void {}

  public checkThemeI(): void {
    if (localStorage.getItem("theme"))
      this._theme.setTheme(localStorage.getItem("theme"));
    else this._theme.setTheme("light");
  }
}
