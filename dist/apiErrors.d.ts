import { Action } from './step';
export type ToolErrorType = 'NO_QUOTE';
export interface ToolError {
    errorType: ToolErrorType;
    code: string;
    action: Action;
    tool: string;
    message: string;
}
