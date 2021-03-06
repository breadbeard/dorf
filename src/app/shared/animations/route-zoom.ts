import {
  trigger,
  animateChild,
  group,
  transition,
  animate,
  style,
  query,
} from '@angular/animations';

// Routable animations
export default trigger('routeAnimation', [
  transition('dorf => what, what => detail, detail => room', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
      }),
    ]),
    query(':enter', [style({ transform: 'scale(100)' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate('0.7s ease-out', style({ transform: 'scale(0)' })),
      ]),
      query(':enter', [
        animate('0.7s ease-out', style({ transform: 'scale(1)' })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('what => dorf, detail => what, room => detail', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
      }),
    ]),
    query(':enter', [style({ transform: 'scale(0)' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '0.7s ease-in',
          style({ transform: 'scale(1000)', bottom: '100vh' })
        ),
      ]),
      query(':enter', [
        animate('0.7s ease-in', style({ transform: 'scale(1)' })),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
