// Readonly in class
export class User {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public groupId: number,
        protected isAdmin: boolean = false,
    ) {}
}

// Singleton
export class UserList {
    users: User[] = [];
    static instance: UserList = new UserList();

    // The constructor should be private;
    private constructor() {}

    public addUser(u: User) {
        this.users.push(u);
    }

    // This does the same thing as addUser, however, in other way;
    static addAnotherUser(u: User) {
        this.instance.users.push(u);
    }

    getUsers(): User[] {
        return this.users;
    }
}
