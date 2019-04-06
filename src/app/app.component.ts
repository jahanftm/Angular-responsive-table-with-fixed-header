import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {data} from './data.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = data;
  widthOfTable: any = '1210' + 'px';
  @ViewChild('responseTable') responseWidthOfTable: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.resetWidth();
  }

  resetWidth() {
    this.widthOfTable =
      this.responseWidthOfTable.nativeElement.scrollWidth + 'px';
  }
}
