export interface StatusCount {
    status: string;
    count: number;
}

export interface DailyCount {
    date: string;
    count: number;
}

export interface RequestStats {
    total: number;
    byStatus: StatusCount[];
    daily: DailyCount[];
}

export interface SubmissionStats {
    total: number;
    byStatus: StatusCount[];
    daily: DailyCount[];
}

export interface PieData {
    name: string;
    value: number;
}