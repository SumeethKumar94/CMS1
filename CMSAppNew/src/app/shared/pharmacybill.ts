import { Medicine } from "./medicine";

export class Pharmacybill {
    Medicine_Bill_Id:  number = 0
        BillDate : Date = new Date;
        PrescriptionId: number = 0;
        PatientId : number = 0;
        DoctorId: number = 0;
        Medicine : Medicine[];
        GrandTotal : number;
}
