
export interface FormItemValidator<T> {
    validate(value: T): boolean;
}

class RequiredFormItemValidator implements FormItemValidator<any> {
    public validate(value: any): boolean {
        if (value) {
            return true;
        }
        return false;
    }
}

export const RequiredValidator: RequiredFormItemValidator = new RequiredFormItemValidator();

export class NumberRange implements FormItemValidator<number> {

    constructor(private options: { start: number, end: number }){ }

    public validate(value: number): boolean {
        if (value < this.options.start || value > this.options.end) {
            return false;
        }
        return true;
    }
}
