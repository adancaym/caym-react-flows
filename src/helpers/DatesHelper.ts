export class DatesHelper {


    isDate(string: string) {
        try {
            new Date(string);
            return true;
        }catch (e) {
            return false;
        }
    }

    stringToDate(string: string) {
        if (this.isDate(string)) return new Date(string);
        else {
            throw Error('No se puede convertir a fecha: ' + string)
        }
    }
}