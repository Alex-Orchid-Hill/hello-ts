/*
 * @Author: LiBaoDeng libdqd_happy2020@163.com
 * @Date: 2024-01-29 08:56:01
 * @LastEditors: LiBaoDeng libdqd_happy2020@163.com
 * @LastEditTime: 2024-01-29 11:15:47
 * @FilePath: \hello-ts\learnTS-20240129.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//接口
interface PersonNew{
    id:number;
    name:string;
    age:number;
    introduce():void;
}

class StudentNew implements PersonNew{
    id: number;
    age: number;
    name: string;

    constructor(id:number,age:number,name:string){
        this.id=id;
        this.age=age;
        this.name=name;
    }
    
    introduce():void{
        console.log("Hello,This is student!");
    }
    
}

class Teacher implements PersonNew{
    id: number;
    age: number;
    name: string;

    constructor(id:number,age:number,name:string){
        this.id=id;
        this.age=age;
        this.name=name;
    }
    
    introduce():void{
        console.log("Hello,This is teacher!");
    }
    
}

let s1:PersonNew=new StudentNew(1,17,"zhangsan");
let t1:PersonNew=new Teacher(2,35,"laoliu");

s1.introduce();
t1.introduce();


interface PaymentStrategy{
    pay(amount:number):void;
}

class Order{
    amount:number;
    paymentStrategy:PaymentStrategy;
    constructor(amount:number,paymentStrategy:PaymentStrategy){
        this.amount=amount;
        this.paymentStrategy=paymentStrategy;
    }
    pay(){
        this.paymentStrategy.pay(this.amount);
    }
}

class AliPay implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`AliPay:${amount}`);
    }
}

//接口在TS中的特殊类型，接口定义对象的类型
interface PersonSpecial{
    id:number;
    name:string;
    age:number;
}

let ps:PersonSpecial={id:11,name:"小工",age:35};

//枚举
enum Season{
    SPRING,
    SUMMER,
    ATUM,
    WINTER
}

let s:Season=Season.SPRING;


//模块化

import {methodFromAModule} from "./learnTS-20240126";

import * as A from "./learnTS-20240126";

methodFromAModule();
A.methodFromAModule();