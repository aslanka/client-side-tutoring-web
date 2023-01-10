import {Region} from './Region';
import {University} from './University';

export enum classYear{
    FRESHMAN, Sophomore, Junior, Senior
}

export enum Positions{
    HR,PAYROLL,DEVELOPER,TUTOR
}

export class Employee {



    
    name : String;
    age : number;
    teaching_method : String;
    school : University;
    positions : Positions;
    hireDate : String;
    region : Region;
    courses : String;
    bio : String;
    profile_picture : String;
    constructor(name : String, age : number, teaching_method: String, school : University, position : Positions, hireDate: String, region : Region, courses : String, bio : String, profile_picture : String){
        this.name = name;
        this.age = age;
        this.teaching_method = teaching_method;
        this.school = school;
        this.positions = position;
        this.hireDate = hireDate;
        this.region = region;
        this.courses = courses;
        this.bio = bio;
        this.profile_picture = profile_picture;
    }

    public getYear(): String{
        return "Junior";
    }


}
