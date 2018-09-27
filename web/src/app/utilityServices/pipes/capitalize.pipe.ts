import {Pipe, PipeTransform} from '@angular/core';

/*
 * Capitalize the first letter of the string
 * Takes a string as a value.
 * Usage:
 * value | capitalize
 */
@Pipe({name: 'capitalize'})

export class CapitalizePipe implements PipeTransform {
    transform(input: string): string {
        return input && input.length ? (input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()) : input;
    }
}
