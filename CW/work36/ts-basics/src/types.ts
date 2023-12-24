export type IDType = number | string;

export type UserType = {
    id?: IDType,
    isAdmin: boolean,
    name: string,
    age?: number
}

type Human = {
    name: string,
    age: number,
    showData(): void,
}

type Developer = Human & {
    skills: string[]
};

const myDev: Developer = {
    name: 'John',
    age: 20,
    skills: ['JS', 'TS', ''],
    showData: function() {
        console.log(this.skills);
    }
}

// interface

interface Human1 {
    name: string,
    age: number,
}

interface Developer1 extends Human1 {
    skills: string[]
};

const myDev1: Developer1 = {
    name: 'John',
    age: 20,
    skills: ['JS', 'TS', 'React'],
}
