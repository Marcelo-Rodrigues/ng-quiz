import { animate, state, style, transition, trigger, stagger, keyframes } from '@angular/animations';

export const ZOOM_IN_DOWN_ANIMATION = trigger('fadeIn', [
  transition(':enter', [
    animate('.5s', keyframes([
      style({
        opacity: '0',
        transform: 'scale3d(.1, .1, .1) translate3d(0, -1000px, 0)',
        offset: 0
      }),
      style({
        opacity: '1',
        transform: 'scale3d(.475, .475, .475) translate3d(0, 60px, 0)',
        offset: .6
      })
    ])),
  ]),
]);
