import seasonInfo from "../resource/season.json";

export const DAILY_MISSIONS_XP = 2000;

export const battlePassTiers = (): number[] => {
    let experienceList = [0, 0]; // pad index 0 and 1 since they won't be used

    // calculate xp from tier 2-50
    for (let i = 2; i <= 50; i++) {
        const xp = 750 * i + 500;
        experienceList.push(xp);
    }

    // add 5 epilogue tiers
    for (let i = 0; i < 5; i++) {
        experienceList.push(36500);
    }

    return experienceList;
};

export const cumulativeBattlePassTiers = (): number[] => {
    let cumulativeXP = [0, 0]; // pad index 0 and 1 since they won't be used
    let experienceList = battlePassTiers();

    let prev = 0;
    for (let i = 2; i < experienceList.length; i++) {
        const xp = prev + experienceList[i];
        cumulativeXP.push(xp);
        prev = xp;
    }

    return cumulativeXP;
};

export const weeklyMissions = (): number[] => {
    let weeklies = [0]; // pad index 0 since it won't be used

    seasonInfo.weeklies.forEach((weekly) => {
        weeklies.push(weekly);
    });

    return weeklies;
};

export const cumulativeWeeklyMissions = (): number[] => {
    let cumulativeXP = [0]; // pad index 0 since it won't be used
    let weekliesList = weeklyMissions();

    let prev = 0;
    for (let i = 1; i < weekliesList.length; i++) {
        const xp = prev + weekliesList[i] * 3;
        cumulativeXP.push(xp);
        prev = xp;
    }

    return cumulativeXP;
};
