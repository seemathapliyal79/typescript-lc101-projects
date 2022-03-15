import{Cargo} from './Cargo';
import{Astronaut} from './Astronaut';
import{Payload} from './Payload'
export class Rocket{
    name:string;
    totalCapacityKg:number;
    cargoItems:Cargo[]=[];
    astronauts:Astronaut[]=[];
    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items:Payload[]):number{
        //Returns the sum of all items using each item's massKg property
        let myTotalMass:number = 0;
        for(let i=0; i<items.length; i++){
            myTotalMass+=items[i].massKg;
        }
    return myTotalMass;
    }
    currentMassKg():number{
      let cargoTotal= this.sumMass(this.cargoItems);
        let astronautTotal = this.sumMass(this.astronauts);
        let massTotal = cargoTotal + astronautTotal;
        return massTotal;
    }
    canAdd(item:Payload):boolean{
    
        let totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg) return true;
        return false;
    }
    addCargo(cargo: Cargo):boolean{
        let itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt){
            this.cargoItems.push(cargo);
            return true;
        }else {
            return false;
        }
        }
        addAstronaut(astronaut: Astronaut):boolean{
            let itCanAddIt = this.canAdd(astronaut);
            if (itCanAddIt){
                this.astronauts.push(astronaut);
                return true;
            }else {
                return false;
            }
    }
}