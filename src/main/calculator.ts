import {
    battlePassTierCumulativeExperience,
    battlePassTierExperience,
    DAILY_MISSIONS_XP,
    weeklyMissions,
    weeklyMissionsTotal,
} from "./experience";

export const calculateXPNeededWithoutDailies = (
    tierGoal: number,
    battlePassTier: number,
    battlePassCurrentXp: number,
    currentWeek: number,
    numWeeklyCompleted: number,
    remainingDays: number
) => {
    const battlePassTierXp = battlePassTierCumulativeExperience();
    const tierGoalXp = battlePassTierXp[tierGoal];
    const cumulativeCompletedBattlePassTierXp =
        battlePassTierXp[battlePassTier - 1];
    const currentBattlePassTierXp =
        battlePassTierExperience()[battlePassTier] - battlePassCurrentXp;

    const weeklies = weeklyMissions();
    const weekliesTotal = weeklyMissionsTotal();
    let cumulativeWeeklies = 0;
    for (let i = 0; i < currentWeek; i++) {
        cumulativeWeeklies += weeklies[i] * 3;
    }
    const currentMidWeekXp = weeklies[currentWeek] * numWeeklyCompleted;
    const weekliesToSubtract =
        weekliesTotal - cumulativeWeeklies - currentMidWeekXp;

    const xpNeeded =
        tierGoalXp -
        cumulativeCompletedBattlePassTierXp -
        currentBattlePassTierXp -
        weekliesToSubtract;

    return Math.ceil(xpNeeded / remainingDays);
};

export const calculateXPNeededWithDailies = (
    tierGoal: number,
    battlePassTier: number,
    battlePassCurrentXp: number,
    currentWeek: number,
    numWeeklyCompleted: number,
    remainingDays: number
) => {
    return (
        calculateXPNeededWithoutDailies(
            tierGoal,
            battlePassTier,
            battlePassCurrentXp,
            currentWeek,
            numWeeklyCompleted,
            remainingDays
        ) +
        DAILY_MISSIONS_XP * 2
    );
};
