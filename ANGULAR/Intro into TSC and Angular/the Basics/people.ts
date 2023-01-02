export abstract class Employee {
    public salary: number;
    tasks: string[] = [];

    private currentWorkIndex = 0;


    constructor(public name: string, public age: number) {
    }

    work(): void {

        console.log(this.tasks[this.currentWorkIndex]);

        this.currentWorkIndex = (this.currentWorkIndex + 1) % this.tasks.length;

    }

    collectSalary(): void {
        console.log(`${this.name} received ${this.collectSalary()}`);
    }

    protected calculateSlary() {
        return this.salary
    }
}

export class Junior extends Employee {
    tasks: string[] = [`${this.name} is working on a simple task.`];
}

export class Senior extends Employee {
    tasks: string[] = [
        `${this.name} is working on a complicated task.`,
        `${this.name} is taking time off work.`,
        `${this.name} is supervising junior workers.`
    ];
}

export class Menager extends Employee {
    tasks: string[] = [
        `${this.name} shudeled a meeting.`,
        `${this.name} is preparing quarterly report.`,
    ];
    divident: number;

    protected calculateSlary(): number {
        return this.salary + this.divident
    }
}
