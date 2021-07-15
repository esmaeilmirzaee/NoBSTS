// Classes - Generic type
interface Database<KT, VT> {
    get(id: KT): VT;
    set(id: KT, value: VT): void;
}

type keyType = number | string | symbol;

export class InMemoryDatabase<KT extends keyType, VT>
    implements Database<KT, VT>
{
    protected db: Record<KT, VT> = {} as Record<KT, VT>;
    get(id: KT): VT {
        return this.db[id];
    }

    set(id: KT, value: VT): void {
        this.db[id] = value;
    }
}

export class PersistentDatabase<KT, VT> extends InMemoryDatabase<KT, VT> {}
