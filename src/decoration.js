class Person {
    constructor(msg) {
        this.msg = msg;
        this.impress = null;
    }
    decoration(impress) {
        this.impress = impress;
    }
    show() {
        console.log(this.msg);
        if (this.impress != null) {
            this.impress.show();
        } 
    }
    disgrace() {
        if (this.impress != null) {
            this.impress.disgrace();
        } 
    }
    warm() {
        if (this.impress != null) {
            this.impress.warm();
        } 
    }
}

class YiFu extends Person {
    constructor(msg) {
        super(msg);
    }
    warm() {
        console.log('i have a yifu, so i can get warm')
    }
    // show() {
    //     console.log(this.msg);
    //     if (this.impress != null) {
    //         this.impress.show();
    //     }
    // }
}

class KuZi extends Person {
    constructor(msg) {
        super(msg);
    }
    disgrace() {
        console.log('i have a disgrace, so i can go out');
    }
    // show() {
    //     console.log(this.msg);
    //     if (this.impress != null) {
    //         this.impress.show();
    //     }
    // }
}

let person = new Person('我是一个人，但我啥都没穿');
const kuzi = new KuZi('我穿了一条裤子');
const yifu = new YiFu('我穿了件衣服');
yifu.decoration(kuzi);
person.decoration(yifu);
person.show();

person.disgrace();
person.warm();

