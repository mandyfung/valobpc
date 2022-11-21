import seasonInfo from "../resource/season.json";
import {
    cumulativeBattlePassTiers,
    cumulativeWeeklyMissions,
    DAILY_MISSIONS_XP,
    weeklyMissions,
} from "./experience";

export const calculateXPNeededWithoutDailies = (
    tierGoal: number,
    battlePassTier: number,
    battlePassCurrentXp: number,
    currentWeek: number,
    numWeeklyCompleted: number
): number => {
    const battlePassTiers = cumulativeBattlePassTiers();
    const tierGoalXp = battlePassTiers[tierGoal]; // 980000
    const completedBattlePassXp = battlePassTiers[battlePassTier - 1] + battlePassCurrentXp;
    let remainingXpNeeded = tierGoalXp - completedBattlePassXp;

    const weeklies = cumulativeWeeklyMissions();
    const midWeekXp = weeklyMissions()[currentWeek] * numWeeklyCompleted;
    const completedWeeklies = weeklies[currentWeek - 1] + midWeekXp;
    const remainingWeeklies = weeklies[weeklies.length - 1] - completedWeeklies;

    remainingXpNeeded = remainingXpNeeded - remainingWeeklies;

    return Math.ceil(remainingXpNeeded / remainingDays());
};

export const calculateXPNeededWithDailies = (
    tierGoal: number,
    battlePassTier: number,
    battlePassCurrentXp: number,
    currentWeek: number,
    numWeeklyCompleted: number
): number => {
    return (
        calculateXPNeededWithoutDailies(
            tierGoal,
            battlePassTier,
            battlePassCurrentXp,
            currentWeek,
            numWeeklyCompleted
        ) -
        DAILY_MISSIONS_XP * 2
    );
};

export const remainingDays = (): number => {
    const currentDate = new Date();
    const endDate = new Date(seasonInfo.endDate);

    return Math.ceil((endDate.getTime() - currentDate.getTime()) / (1000 * 3600 * 24)) + 1;
};
