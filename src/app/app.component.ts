import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MergeMap } from './transform/mergeMap';
import { ConcatMap } from './transform/concatMap';
import { Observable, of, fromEvent } from 'rxjs';
import { delay, map, debounceTime, distinct, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { SwitchMap } from './transform/switchMap';
import { Count } from './transform/count';
import { ErrorHandling } from './error/errorHandling';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'rxjs-samples';

  @ViewChild('password', { read: true, static: false })
  input: ElementRef;


  ngOnInit(): void {

    new ErrorHandling().run2();

  }

  ngAfterViewInit(): void {
    // new SwitchMap().run(this.input.nativeElement);

  }
}
