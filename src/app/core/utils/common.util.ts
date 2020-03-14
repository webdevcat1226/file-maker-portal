import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export async function waitForMilliSecond(millisec: number) {
  await of(null).pipe(
    delay(millisec)
  ).toPromise();
}
