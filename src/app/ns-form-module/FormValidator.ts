
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

