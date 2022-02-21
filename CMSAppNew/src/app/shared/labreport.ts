export class Labreport {
    ReportId:number=0;
        ReportDate:Date=new Date;
        Doctor:string='';
        PatienttId:number=0;
        Patient:string='';
        BloodGroup:string='';
        PhnNo:number=0;
        AppointmentId:number=0;
        Tests:[{
            
            TestName:string,
            Result:number,
            TestId:number
        }];
        
}
