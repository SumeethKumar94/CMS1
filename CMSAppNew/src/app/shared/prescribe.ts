export class Prescribe {
    PrescriptionId: 0;
    PrescriptionDate:Date=new Date; 
    PatientName: string = '';
    DoctorName: string = '';
    Medicines:string[]=[];
    LabTests:string[]=[];
    AppointmentId:number=0;
    TokenNo:number=0;
    ReportDate:Date=new Date;
    PatientId:number=0;
    DoctorId:number=0;
    ReceptionistId:number=0;
    Notes:string='';
}
