import { animation, style, animate } from "@angular/animations";

export const slideInFromTop = animation([
    style({
        opacity: 0, 
        transform: 'translateY(-100%)'
    }), 
    animate('{{time}} ease-in', style({
        opacity: 100, 
        transform: 'translateY(0)'
    }))
]);


export const slideOutToTop = animation([
    style({
        opacity: 100, 
        transform: 'translateY(0)'
    }), 
    animate('{{time}} ease-in', style({
        opacity: 0, 
        transform: 'translateY(-100%)'
    }))
]);

export const slideInFromLeft = animation([
    style({ opacity: 0, transform: 'translateX(-200px)' }),
    animate(
        '{{time}} ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
    )
]);


export const slideOutToLeft = animation([
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
        '{{time}} ease-in',
        style({ opacity: 0, transform: 'translateX(-200px)' })
    ),
]);

export const slideInFromRight = animation([
    style({ opacity: 0, transform: 'translateX(200px)' }),
    animate(
        '{{time}} ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
    )
]);

export const slideOutToRight = animation([
    style({ opacity: 1, transform: 'translateX(0)' }),
    animate(
        '{{time}} ease-in',
        style({ opacity: 0, transform: 'translateX(200px)' })
    )
])