import { Form } from "react-bootstrap";
import { weeklyMissions } from "../experience";

interface IProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrentWeekInput = ({ onChange }: IProps) => {
    return (
        <Form.Group className="mb-3" controlId="finishedWeeklyMission">
            <Form.Label>Current week</Form.Label>
            <Form.Select onChange={onChange}>
                {weeklyMissions()
                    .map((_mission, index) => <option key={index}>{index}</option>)
                    .slice(1)}
            </Form.Select>
            <Form.Text className="text-muted">
                Which week are you currently on for your weekly missions?
            </Form.Text>
        </Form.Group>
    );
};
