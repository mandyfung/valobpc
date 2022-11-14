export const WEEKLY_MISSIONS = 12;
export const DAILY_MISSIONS_XP = 2000;

export const battlePassTierExperience = () => {
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

export const battlePassTierCumulativeExperience = () => {
    let cumulativeXP = [0, 0]; // pad index 0 and 1 since they won't be used
    let experienceList = battlePassTierExperience();

    let prev = 0;
    for (let i = 2; i <= 55; i++) {
        const xp = prev + experienceList[i];
        cumulativeXP.push(xp);
        prev = experienceList[i];
    }

    return cumulativeXP;
};

export const weeklyMissions = () => {
    // hardcoding weekly missions
    return [
        0, // pad index 0 since it won't be used
        7200, //
        7200, //
        9600, //
        9600, //
        9600, //
        9600, //
        10800, //
        10800, //
        10800, //
        10800, //
        12000, //
        12000, //
    ];
};

export const weeklyMissionsTotal = () => {
    let weeklies = weeklyMissions();
    let total = 0;
    for (let i = 0; i < weeklies.length; i++) {
        total += weeklies[i] * 3;
    }
    return total;
};
