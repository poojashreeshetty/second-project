//false,0,an empty string "" , null/undefined all are same;
//1,it return the first argument if it is not null/undefined

//1. let user;
// alert(user?? "anonymous"); // anonymous // user not defined.


// 2.let firstname=null;
// let lastname=null;
// nickname="super";
// //shows first defined value
// alert(firstname ?? lastname ??  nickname); // super


//2. comparision with ||
//shows the first truthy value
// let firstname=null;
// let lastname=null;
// nickname="super";
// alert(firstname||lastname||nickname||"anonymous");//supercoder


//1, example
// 1let height = 0;
// alert(height || 100); // 100 // return first truthy value
// alert(height ?? 100); // 0 //return first defined value

