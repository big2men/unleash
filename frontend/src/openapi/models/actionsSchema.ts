/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ActionSchema } from './actionSchema';
import type { ActionsSchemaMatch } from './actionsSchemaMatch';

/**
 * A response model with an identifiable action set.
 */
export interface ActionsSchema {
    /** The list of actions to execute in sequential order when the action set is triggered */
    actions: ActionSchema[];
    /** The id of the service account that will execute the action */
    actorId: number;
    /** The date and time of when the action was created. */
    createdAt?: string;
    /** The id of user that created this action set */
    createdByUserId?: number;
    /** The id of the action set */
    id: number;
    /** Defines a matching rule for the observable event that will trigger the action set */
    match: ActionsSchemaMatch;
    /** The name of the action set */
    name: string;
    /** The project of the action set is added to */
    project: string;
}
