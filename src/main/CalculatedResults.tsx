import { Table } from "react-bootstrap";
import { remainingDays } from "./calculator";
import { weeklyMissions } from "./experience";
import { ExpNeeded } from "./types";

interface IProps {
    results: ExpNeeded;
}

export const CalculatedResults = ({ results }: IProps) => {
    const totalWeeks = weeklyMissions().length - 1;
    const daysLeft = remainingDays();

    return (
        <>
            <div>
                {`Assuming you will finish all ${totalWeeks} weeks of weekly missions, and you have ${daysLeft} days remaining in this battle pass:`}
            </div>
            <Table striped bordered>
                <tbody>
                    <tr>
                        <th>Additional XP needed/day without dailies</th>
                        <td>{results.xpNeededWithoutDailies}</td>
                    </tr>
                    <tr>
                        <th>Additional XP needed/day with dailies</th>
                        <td>{results.xpNeededWithDailies}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};
