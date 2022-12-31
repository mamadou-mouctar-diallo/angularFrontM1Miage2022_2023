import {AfterViewInit, Component, ElementRef, ViewChild} from "@angular/core";
import {ProgressSpinner} from "primeng/progressspinner";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: "app-loader",
  templateUrl: "loader.component.html"
})

export class LoaderComponent implements AfterViewInit{
  @ViewChild('spinner') spinner!: ProgressSpinner;
  isLoading: boolean = false;
  constructor(public loader: LoaderService) {

  }

  ngAfterViewInit(): void {
    }

}
