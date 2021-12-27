export interface NumberHelperInterface {
    isNumber: (number: string) => boolean;
    isFloatNumber: (number: string) => boolean;
}

export class NumbersHelpers implements NumberHelperInterface {

    isNumber(number: string): boolean {
        return !!Number(number);
    }

    isFloatNumber(number: string): boolean {

        if (number[number.length - 1] === '.') {
            number = number.concat('0');
        }
        return /^[+-]?[0-9]+([.][0-9]+)?([eE][+-]?[0-9]+)?$/.test(number)
    }

    stringToNumber(number: string): number {
        if (this.isNumber(number)) {
            return Number(number);
        } else {
            return 0;
        }
    }

    stringToFloat(number: string): number {
        if (this.isFloatNumber(number)) {
            return Number(number);
        } else {
            return 0;
        }
    }
}