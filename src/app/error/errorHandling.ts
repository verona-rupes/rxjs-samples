import { concatMap, delay, take, finalize, catchError } from 'rxjs/operators';
import { of, interval, throwError } from 'rxjs';

export class ErrorHandling {
  public run(): void {
    const source = of(2000, 1000);
    const concatMapExample = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ).subscribe(val => console.log(`With concatMap: ${val}`));
  }

  //finalize
  public run2(): void {
    const source = interval(1000);
    const example = source.pipe(
      take(5),
      throwError,
      catchError(err => {
        return of('caught error, rethrowing');
      }),
      finalize(() => console.log('Sequence complete'))
    ).subscribe(val => console.log(val));
  }

}


