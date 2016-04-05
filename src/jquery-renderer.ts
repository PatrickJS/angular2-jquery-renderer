import {ElementRef, Renderer, Injectable, provide} from 'angular2/core';
import {DOCUMENT} from 'angular2/src/platform/dom/dom_tokens';
import {DomRenderer, DomRootRenderer, DomRootRenderer_} from 'angular2/src/platform/dom/dom_renderer';

import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {Observable} from 'rxjs/Observable';

export class $el {
  constructor(public context: ElementRef, public renderer: Renderer) {}

  addClass(className: string | Array<string>): this {
    if (typeof className === 'string') {
      this._$('setElementClass', className, true);
    } else if (Array.isArray(className)) {
      for (let i = 0; i < className.length; i++) {
        let name = className[i];
        this._$('setElementClass', name, true);
      }
    }
    return this;
  }
  removeClass(className: string): this {
    if (typeof className === 'string') {
      this._$('setElementClass', className, false);
    } else if (Array.isArray(className)) {
      for (let i = 0; i < className.length; i++) {
        let name = className[i];
        this._$('setElementClass', name, false);
      }
    }
    return this;
  }

  attr(attributeName: string): this {
    return this;
  }

  prop(propertyName: string): this {
    return this;
  }

  css(): this {
    return this;
  }

  show(): this {
    return this;
  }

  hide(): this {
    return this;
  }

  toggle(): this {
    return this;
  }

  insertAfter(): this {
    return this;
  }

  insertBefore(): this {
    return this;
  }

  toArray(): this {
    return this;
  }

  children(): this {
    return this;
  }

  find(): this {
    return this;
  }

  first(): this {
    return this;
  }

  last(): this {
    return this;
  }

  parent(): this {
    return this;
  }

  observe(event: string): Observable<any> {
    return new Observable(observer => {
      let dispose = this.renderer.listen(this.context.nativeElement, event, (evt) => {
        observer.next(evt);
      });

      return () => {
        dispose();
      };
    });
  }

  _$(prop, ...args): any {
    return this.renderer[prop](this.context.nativeElement, ...args);
  }
}
