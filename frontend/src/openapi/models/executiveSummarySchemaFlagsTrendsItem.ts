/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

export type ExecutiveSummarySchemaFlagsTrendsItem = {
    /** The number of non-archived flags on a particular day */
    active: number;
    /** The number of archived flags on a particular day */
    archived: number;
    /** A UTC date when the stats were captured. Time is the very end of a given day. */
    date: string;
    /** The number of all flags on a particular day */
    total: number;
};
