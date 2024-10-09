/*
 * @Author: LiBaoDeng libdqd_happy2020@163.com
 * @Date: 2024-01-26 14:48:36
 * @LastEditors: LiBaoDeng libdqd_happy2020@163.com
 * @LastEditTime: 2024-01-29 11:10:11
 * @FilePath: \hello-ts\learnTS-20240126.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/* console.log('hello world');
let c=60;
console.log(typeof c);

let a:number[]=[1,2,3];
let b:string[]=['a','b'];
let person:{name:string,age:number,gender:string}={name:'小白',age:20,gender:"女"};
console.log(person.age);
//可选参数
function getPersonInfo(name:string,age:number,gender?:string):string{
    if(gender==undefined){
        gender="未知";
    }
    return `name:${name},age:${age},gender:${gender}`;
}

let p1=getPersonInfo('小p',30,'男');
let p2=getPersonInfo('小a',30);
console.log(p1);
console.log(p2);

//默认参数
function getPersonInfoNew(name:string,age:number,gender:string='未知'):string{
    return `name:${name},age:${age},gender:${gender}`;
}
console.log(getPersonInfoNew('小G',20));

//联合类型
function printNumberOrString(value:string|number){
    console.log(value);
}

//任意类型
function printAnyType(value:any){
    console.log(value);
}
 */

class Person{
  id:number;
  age:number;
  name:string;

  constructor(id:number,age:number){
    this.id=id;
    this.age=age;
  }

  introduce():string{
    return `hello,my id is ${this.id} ,and my age is ${this.age},and my name is ${this.name}`;
  }
}
let p3=new Person(30,1001);
p3.name="张三";
console.log(p3);
console.log(p3.introduce());

//静态属性
class constants{
    static count:number=100;
}

//静态方法
class Utils{
    static toLowerCase(str:string){
        return str.toLowerCase();
    }
}
console.log(Utils.toLowerCase("XiaoHua"));

//继承
class Student extends Person{
    stuName:string;

    constructor(id:number,age:number,stuName:string){
        super(id,age);
        this.stuName=stuName;
    }

    introduce():string{
        return super.introduce()+`,and my name is ${this.stuName}`;
      }
}


let stu1=new Student(2001,20,"小明");
console.log(stu1.introduce());


export function methodFromAModule(){
    console.log("This is a console form Module A");
}