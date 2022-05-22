declare module './users.json' {
    interface Users {
      id: number;
      displayName: string;
    }

    interface Data {
        data: Array<Users>;
    }

    const data: Data;

    export default data;
}
