class Person {
    eat() {
        console.log('EAT');
    }

    walk() {
        console.log('WALK');
    }

    learn() {
        console.log('LEARN');
    }
}

const p1 = new Person();
p1.eat();
p1.walk();
p1.learn();

class Tester extends Person {
    test() {
        console.log('TEST');
    }
}

const t1 = new Tester();
console.log(t1);
t1.test();
t1.eat();
t1.walk();
t1.learn();