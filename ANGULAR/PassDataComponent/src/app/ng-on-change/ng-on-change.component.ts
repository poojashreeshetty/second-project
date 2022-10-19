import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-on-change',
  templateUrl: './ng-on-change.component.html',
  styleUrls: ['./ng-on-change.component.css']
})
export class NgOnChangeComponent implements OnInit,OnChanges {
@Input() 
title:string="ngonchange component"
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("this is ngonchanges")
  }

  ngOnInit(): void {
  }

}
