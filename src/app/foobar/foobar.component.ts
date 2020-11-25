import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foobar',
  templateUrl: './foobar.component.html',
  styleUrls: ['./foobar.component.css']
})
export class FoobarComponent implements OnInit {

  @Input() abc = '';

  constructor() {
  }

  ngOnInit(): void {
  }
}
