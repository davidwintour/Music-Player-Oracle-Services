import { SafeUrlPipe } from './safe-url.pipe';
import {DomSanitizer} from '@angular/platform-browser';

describe('SafeUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
