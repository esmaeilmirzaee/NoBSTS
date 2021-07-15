// Readonly in class
export class User {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public groupId: number,
        protected isAdmin: boolean = false,
    ) {}
}
