//console.log(math.PI); // a static poperty of math prototype

console.log(Math.max(1,2)); // max() is a static method of math prototype

/*
static keyword
static methods-properties: can be invoked/accesed with the className or property
*/

class AmazonAccount {
    // static function can be invoked by class or prototype name
    static afucntion() {
        console.log('STATIC METHOD');
    }
    // non-static methpds can be invoked by the object of this class or prototype
    bFunction() {
        console.log('NON-STATIC METHOD');
    }
}

AmazonAccount.afucntion();

const aa = new AmazonAccount();
aa.afucntion();
aa.bfucntion();

//static methods
Array.isArray();
Object.keys();
Object.entries();
Object.values();
Object.create();
Math.min();

// static properties
Math.PI;
Number.MAX_VALUE




