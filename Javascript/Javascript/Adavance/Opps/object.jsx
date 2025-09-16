|||||||||||||||||||||||||||| Object Compare 2 object in javscript ------------------->>>
const obj1={
    a:1,
    b:2,
    c:{d:4},
    e:new Date("2021-03-25"),
    f:[1 , 2 , 3 , 4]
}



const obj2={
    a:1,
    b:2,
    c:{d:4},
    e:new Date("2021-03-25"),
    f:[1 , 2 , 3 , 4]
}

let one=Object.keys(obj2).length
console.log(one)
console.log(obj1)
console.log(JSON.stringify(obj2))
console.log(obj1 === obj2)
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // not best solution

function compare(o1 , o2){

    // --> compare both object -----------------
    if(typeof o1 !== "object" || typeof o2 !== "object"){
        return false;
    }

    //--- Check length -------------------
    let one=Object.keys(obj1).length
    let two=Object.keys(obj2).length

    if(one !== two){
        return false;
    }

    //--> loops ------------------
    for(let key of o1){
        if(o1[key]!== o2[key]){
            return false;
        }

        for(const k of one){
            if(!o2.hasOwnProperty(k)){
                return false;
        }

        const val1=o1[k]
        const val2=o2[k]
        if(val1 instanceof Date && val2 instanceof Date){
             if(val1.getTime()!== val2.getTime()){
                return false;
            }
        }
      else  if(typeof val1 === "object" &&  typeof val2 === "object"){
            if(!compare(val1  , val2)){

                return false;
            }
        }else if(val1 !== val2){
            return false;
        }

    }

}

}

let objt={
    name:"jugal",
    class:"10th",
    roll:12,
    gender:"male",
    names:""
}
//changes
a.name="kanran"
//deletes
delete a.ineer
//add values
a.city="mimam"
a['pin code']=181123
console.log(a.name)
console.log(a)
console.log("city" in a)
console.log(a.getData())
// console.log(a.ineer.names)

for(item in a){
    console.warn(item)
    console.log("key" + a[item])
}

let data = {
    name: ["jugal", "sharma"],
    class: "10th"
};
let str = "jua";



???????????????????????//Nullish Coalescing Operation 

let objt={
    name:"jugal",
    class:"10th",
    roll:12,
    gender:"male",
    names:""
}
console.log(objt["names"] ?? null);  //show only  undefind or null
console.log(objt["nametyhus"] ?? undefined);
// console.log(objt["nametyhus"] ||  "unknow"); // show 
console.log(objt.name || "kio")


????:::::::::::::::: ---------------->>> 


[
    {
    "name":"jugal",
    "age":11,
    "hobbies":["walking" , "Reading"],
    "identity":{hashPanCard:false , hashAdhaarCard:true},
    "bio":"I am a youtuber and actor"
    },
    {
        "name":"karan",
        "age":20,
        "hobbies":["cricket
            
            
            " , "Reading"],
        "identity":{hashPanCard:false , hashAdhaarCard:true},
        "bio":"I am a youtuber and actor"
    },



::::::::::::::: Object with index number -----------------------<><><><>

const objArray = [
   {
       index: 0,
       details: {
           name: "jugal",
           rollno: 45
       }
   },
   {
       index: 1,
       details: {
           name: "karan",
           rollno: 20
       }
   }
];

console.log(objArray[0])


const obj = {
    0: {
        name: "jugal",
        rollno: 45
    },
    1: {
        name: "karan",
        rollno: 20
    }
};




What is JSON? |||||||||||||||||

Q what is Tostring

{
  "name": "John",
  "age": 30,
  "isStudent": true,
  "courses": ["Math", "Science"],
  "address": {
    "city": "New York",
    "zipcode": "10001"
  }
}



Comparing JSON, BSON, GSON, and other data interchange formats.
