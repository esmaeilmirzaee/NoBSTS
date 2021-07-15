// classes
interface Database {
    get(id: string): string;
    set(id: string, value: string): void;
}

export class InMemoryDatabase implements Database {
    // if the following variable isn't protected so it would be modified without
    // the db knows about it.
    protected db: Record<string, string> = {};
    set(id: string, value: string): void {
        this.db[id] = value;
    }
    get(id: string): string {
        return this.db[id];
    }
}

interface PersistentDB {
    storeState(): string;
    restoreState(state: string): void;
}

export class PersistentDatabase
    extends InMemoryDatabase
    implements PersistentDB
{
    storeState(): string {
        return JSON.stringify(this.db);
    }
    restoreState(state: string): void {
        this.db = JSON.parse(state);
    }
}
