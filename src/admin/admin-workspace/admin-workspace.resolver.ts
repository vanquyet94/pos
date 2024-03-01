import { Resolver } from '@nestjs/graphql';
import { WorkspaceService } from 'src/modules/workspace/workspace.service';
import { EmployeeService } from 'src/modules/employee/employee.service';


@Resolver()
export class AdminWorkspaceResolver {
    constructor(
        private readonly _workspaceService: WorkspaceService,
        private readonly _employeeService: EmployeeService
    ) { }

    
}
