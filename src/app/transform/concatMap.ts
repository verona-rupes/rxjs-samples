import { concatMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';

export class ConcatMap {
  public run(): void {
    const source = of(2000, 1000);
    const concatMapExample = source.pipe(
      concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    ) .subscribe(val => console.log(`With concatMap: ${val}`));
  }
}
