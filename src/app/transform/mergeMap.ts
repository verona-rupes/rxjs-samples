import { of, Observable, timer, } from 'rxjs';
import { mergeMap, delay, mapTo } from 'rxjs/operators';

export class MergeMap {

  public run1(): void {

    const source = of(2000, 1000);
    const mergeMapExample = source
      .pipe(
        mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
      )
      .subscribe(val => console.log(`With mergeMap: ${val}`));
  }

  public run2(): void {
    const post$ = of({ id: 1 });
    const getPostInfo$ = (id) => timer(3000).pipe(mapTo({ title: 'inner observable:' + id }));

    const posts$ = post$.pipe(mergeMap(post => getPostInfo$(post.id)))
      .subscribe(res => console.log(res));
  }

}
