import { AsyncDirective } from 'lit/async-directive.js';
import { directive } from 'lit/directive.js';

class ResolvePromise extends AsyncDirective {
  render(promise: Promise<unknown>) {
    Promise.resolve(promise).then((resolvedValue) => {
      // Rendered asynchronously:
      this.setValue(resolvedValue);
    });
    // Rendered synchronously:
    return `Waiting for promise to resolve`;
  }
}
export const resolvePromise = directive(ResolvePromise);