import { animate, state, style, transition, trigger, stagger, keyframes } from '@angular/animations';

export const BOUNCE_IN_SIDES_ANIMATION = trigger('bounceIn', [
  state('carregado',
    style({
      opacity: '1',
      offset: 1
    })
  ),
  transition('avancando => *', [
    animate('.5s', keyframes([
      style({
        opacity: '0',
        transform: 'translate3d(3000px, 0, 0)',
        offset: 0
      }),
      style({
        opacity: '1',
        transform: 'translate3d(-25px, 0, 0)',
        offset: .6
      }),
      style({
        transform: 'translate3d(10px, 0, 0)',
        offset: .75
      }),
      style({
        transform: 'translate3d(-5px, 0, 0)',
        offset: .9
      })
    ]))
  ]),
  transition('recuando => *', [
    animate('.5s', keyframes([
      style({
        opacity: '0',
        transform: 'translate3d(-3000px, 0, 0)',
        offset: 0
      }),
      style({
        opacity: '1',
        transform: 'translate3d(25px, 0, 0)',
        offset: .6
      }),
      style({
        transform: 'translate3d(-10px, 0, 0)',
        offset: .75
      }),
      style({
        transform: 'translate3d(5px, 0, 0)',
        offset: .9
      })
    ]))
  ])
]);
