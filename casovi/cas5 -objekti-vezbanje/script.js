// const person= {
//     FirstName : "Hana",
//     LastName : "Plojovic",
//     Age: 12,
// }
// console.log(person.FirstName);
// console.log(person["FirstName"]);


//


// const person= {
//         FirstName : "Hana",
//         LastName : "Plojovic",
//         Age: 12,
//         fulName : function (){
//             return this.FirstName + " " + this.LastName;
//         }
//     }

//     console.log(person.fulName())


//


// const person= {
//         FirstName : "Hana",
//         LastName : "Plojovic",
//         Age: 12,
//         fulName : function (){
//             return this.FirstName + " " + this.LastName;
//         }
//     }
// Object.freeze(person);
// Object.seal(person);


//


// const person= {
//         FirstName : "Hana",
//         LastName : "Plojovic",
//         Age: 12,
//         fulName : function (){
//             return this.FirstName + " " + this.LastName;
//         }
//     }
// Object.seal(person);
// person.height = 180;
// console.log(person);



//zadaci - vezbanje



//1.


// const myCar = {
//     id: 1,
//     marka: "Audi",
//     model: "a4",
//     boja: "Crvena",
//     pogon: "prednji",
//     menjac: "automatski",
//     kontakt: [0622222, 02033322],
//     servis: {
//       datum: "04,maj",
//       km: 23000,
//       serviser: "Pasovic",
//     },
//     udaran: true,
   
//   }; 
//   myCar.trenutnaBrzina= 0;
//   myCar.maksimalnaBrzina= 260;
 
//   myCar.povecanjeBrzine = function (ubrzanje){
//     if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina){
//         return "nije moguce povecati brzinu za datu vrednost ubrzanja"
//     }else{
//         this.trenutnaBrzina +=ubrzanje;
//     }
//   };
  
  
//   myCar.smanjenjeBrzine = function(smanjenje){
//     if(this.trenutnaBrzina - smanjenje < 0 ){
//         return "nije moguce smanjiti brzinu za datu vrednost."
//     }else{
//         this.trenutnaBrzina -= smanjenje;
//     }
//   };

//   myCar.koci = function(){
//     return this.trenutnaBrzina = 0;
//   }


// // console.log(myCar.povecanjeBrzine(300));
// // console.log(myCar.smanjenjeBrzine(20));
// myCar.koci();


//2.


// const person = {
//     firstName : "Hana",
//     LastName : "Plojovic",
//     language: "srpski",
//     setLanguage : function(newlanguage){
//         this.language = newlanguage;
//     },
//     setNickName : function(){
//         return this.firstName[0].toUpperCase()+this.firstName[1].toLocaleLowerCase()+this.LastName[0].toLocaleLowerCase()+this.LastName[1].toLocaleLowerCase();
//     }
// }
// person.setLanguage("engleski")
// person.setNickName()
// console.log(person)