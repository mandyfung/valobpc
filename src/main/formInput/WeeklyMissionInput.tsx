import { Form } from "react-bootstrap";

interface IProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const WeeklyMissionInput = ({ onChange }: IProps) => {
    return (
        <Form.Group className="mb-3" controlId="finishedWeeklyMissionDetailed">
            <Form.Label>Weekly missions completed this week</Form.Label>
            <Form.Select onChange={onChange}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </Form.Select>
            <Form.Text className="text-muted">
                Out of the 3 weekly missions for this week, how many did you finish?
            </Form.Text>
        </Form.Group>
    );
};
