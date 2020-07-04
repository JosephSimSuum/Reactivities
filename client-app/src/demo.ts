let data;

data='42';

export interface MyCar{
    color:string;
    model:string;
    topspeed?:number;
}

const car1:MyCar={
    color:'blue',
    model:'BMW'
}

const car2:MyCar={
    color:'RED',
    model:'Mercedes',
    topspeed:100
}

export const cars=[car1,car2]