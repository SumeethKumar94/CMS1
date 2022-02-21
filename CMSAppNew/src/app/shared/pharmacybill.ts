import { Medicine } from "./medicine";

export class Pharmacybill {
    PatientName : string = '';
    Date : Date = new Date;
    PrescriptionId: number = 0;
    PatientId : number = 0;
    DoctorId: number = 0;
    Medicine : Medicine[];
    GrandTotal : number;
}
