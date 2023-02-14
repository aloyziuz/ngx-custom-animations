import { AnimationReferenceMetadata, useAnimation } from "@angular/animations";





export interface AnimationParam{
    time: string;
}


export function GetAnimation(anim: AnimationReferenceMetadata, param: AnimationParam){
    return useAnimation(anim, {
        params: param
    });
}





export * from './fade-and-scale';
export * from './fade-and-slide';