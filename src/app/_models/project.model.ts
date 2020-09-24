import { Timestamp } from 'rxjs/internal/operators/timestamp';

export class ProjectModel {
   uid: string;
   project_id: string;
   project_location: string;
   project_description: string;
   project_name: string;
   project_status: string;
   project_start_d: Date;
   project_end_d: Date;
}
