import { fromEvent, interval, Observable } from 'rxjs';
import { count, takeUntil } from 'rxjs/operators';
import { ElementRef } from '@angular/core';
export class Count {

  public run(input: ElementRef<any>['nativeElement']) {

    const clicks$ = fromEvent<any>(input, 'keyup');
    const result = clicks$.pipe(count((value: any, index: number, source: Observable<any>) => index> 0));
    result.subscribe(x => console.log(x));
  }




}

