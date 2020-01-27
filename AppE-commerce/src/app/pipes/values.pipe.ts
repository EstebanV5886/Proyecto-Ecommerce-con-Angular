import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'values',
    pure: false
})

export class ValuesPipe implements PipeTransform {
    transform(value: Object, args: any[] = null): any {
        return Object.keys(value).map(key => value[key]);
    }
}