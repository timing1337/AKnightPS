import chalk from 'chalk';

export default class Logger {
    public name: string;
    public color: chalk.Chalk;

    public constructor(name: string) {
        this.color = chalk.hex('#ccd9e5');
        this.name = this.color(name);
    }

    public static getDate(): string {
        return new Date().toLocaleTimeString();
    }

    public logRaw(msg: string, header: string = '') {
        console.log(Logger.getDate() + ' ' + header + '' + this.name, `:`, chalk.hex(`${'#ccd9e5'}`)(msg));
    }

    public start(msg: string) {
        this.logRaw(msg, chalk.hex('#76db91')(`[ 🟢 ]`));
    }

    public stop(msg: string) {
        this.logRaw(msg, chalk.hex('#e87963')(`[ 🔴 ]`));
    }

    public debug(data: any) {
        this.logRaw(data, chalk.hex('#6b8daa')(`[ 🔨 ]`));
    }

    public log(data: any) {
        this.logRaw(data, chalk.hex('#9eb5ef')(`[ 🔔 ] `));
    }

    public warn(data: any) {
        this.logRaw(data, chalk.hex('#ead672')(`[ ⚠️ ]`));
    }

    public error(data: any) {
        this.logRaw(data, chalk.hex('#e55252')(`[ ❗ ]`));
    }
}
