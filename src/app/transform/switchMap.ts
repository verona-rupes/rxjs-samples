import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap, tap, count } from 'rxjs/operators';
import { ElementRef } from '@angular/core';

export class SwitchMap {

  public run(input: ElementRef<any>["nativeElement"]) {

    const clicks$ = fromEvent<any>(input, 'keyup');

    clicks$.pipe(
      debounceTime(200), distinctUntilChanged(),
      map(event => event.target.value)
      , switchMap(val => val + 'new'),
      tap(val => console.log(val))
    ).subscribe(console.log);

  }

}
