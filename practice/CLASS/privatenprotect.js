//for protectected - underscore
//private-#



//1.varible can be accessed outside-protected
// class Bottle{
//     _waterlevel=0;
    
//     setWater(value){
//         this._waterlevel=value;
//     }
//     getWater(){
//         console.log(`${this._waterlevel} ml`)
//     }
    
//     }
//     let newBottle=new Bottle();
//     console.log(newBottle._waterlevel);//0




//2.variable cannot be accessed-private
// class Bottle{
//     #waterlevel=0;
    
//     setWater(value){
//         this.#waterlevel=value;
//     }
//     getWater(){
//         console.log(`${this.#waterlevel} ml`)
//     }
    
//     }
//     let newBottle=new Bottle();
//     console.log(newBottle.#waterlevel);//error-Private field '#waterlevel' must be declared in an enclosing class



//3.class Bottle{
// _waterlevel=0;

// setWater(value){
//     this._waterlevel=value;
// }
// getWater(){
//     console.log(`${this._waterlevel} ml`)
// }

// }
// let newBottle=new Bottle();
// newBottle.setWater(100);
// newBottle.getWater();//100ml



// 4.class Bottle{
//     _waterlevel=0;
    
//     _setWater(value){
//         this._waterlevel=value;
//     }
//     _getWater(){
//         console.log(`${this._waterlevel} ml`)
//     }
    
//     }
//     let newBottle=new Bottle();
//     newBottle._setWater(100);
//     newBottle._getWater();//100 ml





//5
// class Bottle{
//     _waterlevel=0;
    
//     _setWater(value){
//         this._waterlevel=value;
//     }
//     _getWater(){
//         console.log(`${this._waterlevel} ml`)
//     }
    
//     }
//   class Milton extends Bottle{
//     newMethod(){
//         console.log("i am new mwrthod")
//     }
//   }

//   let obj=new Milton();
//   obj._setWater(100);
//   obj._getWater();//100ml
  //when milton extends bottle , _setwater and _getwater come inside the 
  //milron class as a public 
  



  class Bottle{
    #waterlevel=0;
    
    #setWater(value){
        this._waterlevel=value;
    }
    #getWater(){
        console.log(`${this._waterlevel} ml`)
    }
    
    }
  class Milton extends Bottle{
    newMethod(){
        console.log("i am new mwrthod")
    }
  }

  let obj=new Milton();
  obj._setWater(100);
  obj._getWater();//100ml
  //when it came to child-treat as private ketword only
  


