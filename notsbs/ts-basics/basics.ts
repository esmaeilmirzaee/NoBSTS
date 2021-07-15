// Classes - Generic type
interface Database {
    get(id: string): string;
    set(id: string, value: string): void;
}

export class InMemoryDatabase implements Database {
    protected db: Record<string, string> = {};
    get(id: string): string {
        return this.db[id];
    }

    set(id: string, value: string): void {
        this.db[id] = value;
    }
}
