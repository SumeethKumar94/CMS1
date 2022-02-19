import { Medicine } from "./medicine";

var grandTotal : number;

export class Pharmbillprint {
    Medicine_Bill_Id:  number = 0
        BillDate : Date = new Date;
        PrescriptionId: number = 0;
        PatientId : number = 0; 
        DoctorId: number = 0;
        PatientName : string = '';
        Medicine : Medicine[];
        GrandTotal : number;
}
