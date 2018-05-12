import { TimeInput } from './src/clock';
import { DiContext } from './src/di';
import { publicClock } from './src/publicClock';
import { append, create, remove } from './src/template';

// requiring will auto inject via webpack style-loader
declare var require: any
const css = require('./src/clock.css');

type Input =
    {
        element?: object, 
        time?: {hour: object | null, minute: object | null} | Date,
        closeOnSelect?: boolean
    }

function simpleMaterialTime(input?: Input) {

    if (!input) input = {};

    var element: HTMLElement | undefined;
    var time: TimeInput = {hour: 0, minute: 0};

    if (input.element) {
        if (input.element instanceof HTMLElement) {
            element = input.element;
        } else {
            throw new Error("The element propery must be a html element, or undefined.");
        }
    }

    if (input.time != null) {
        if (input.time instanceof Date) {
            time.hour = input.time.getHours();
            time.minute = input.time.getMinutes();
        } else {
            if (input.time.hour != null) {
                if (typeof input.time.hour === "number") {
                    if (input.time.hour < 0 || input.time.hour > 23) throw new Error("The time.hour argument must be between 1 and 24.");
                    time.hour = input.time.hour;
                } else {
                    throw new Error("The time.hour argument must be a number.");
                }
            }
            
            if (input.time.minute != null) {
                if (typeof input.time.minute === "number") {
                    if (input.time.minute < 0 || input.time.minute > 59) throw new Error("The time.minute argument must be between 0 and 59.");
                    time.minute = input.time.minute;
                } else {
                    throw new Error("The time.minute argument must be a number.");
                }
            }
        }
    }

    var context = new DiContext({ time, closeOnSelect: !!input.closeOnSelect }, element);
    return publicClock(context);
}

export {
    simpleMaterialTime
}