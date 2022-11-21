export interface ExpNeeded {
    xpNeededWithDailies?: number;
    xpNeededWithoutDailies?: number;
}

export interface UserInput {
    currentWeek: number;
    numWeeklyCompleted: number;
    currentTier: number;
    completedXP: number;
}
