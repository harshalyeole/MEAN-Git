import {Injectable} from '@angular/core';
@Injectable()
export class UtilityHelper {
    constructor() {
    }

    getFormattedDate(dates): any {
        let date = new Date(dates);
        let displayDate = (date.getUTCMonth() + 1) + '/'
            + date.getDate() + '/' + date.getFullYear();
        return displayDate;
    }

    toTitleCase(str) {
        return str.replace(/\w\S*/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

    /**
     * To convert base 64 to blob
     * @param base64Data
     * @param contentType
     * @returns {Blob}
     */

    base64toBlob(base64Data, contentType) {
        contentType = contentType || '';
        let sliceSize = 1024;
        let byteCharacters = atob(base64Data);
        let bytesLength = byteCharacters.length;
        let slicesCount = Math.ceil(bytesLength / sliceSize);
        let byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            let begin = sliceIndex * sliceSize;
            let end = Math.min(begin + sliceSize, bytesLength);

            let bytes = new Array(end - begin);
            for (let offset = begin, i = 0 ; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: 'xls' });
    }

    trimContent(form, value, control) {
        if(value) {
            form.controls[control].setValue(value.trim());
        }
        return value.trim();

    }

    formatDate(inputDate) {
        if (inputDate) {

            let date = new Date(inputDate);
            let formatted = {
                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate()
            };
            return formatted;
        } else {
            return '';
        }
    };
}
