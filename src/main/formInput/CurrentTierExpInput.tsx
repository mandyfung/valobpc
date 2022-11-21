import { Form } from "react-bootstrap";

interface IProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CurrentTierExpInput = ({ onChange }: IProps) => {
    return (
        <Form.Group className="mb-3" controlId="completedXPForCurrentTier">
            <Form.Label>Completed XP for current battle pass tier</Form.Label>
            <Form.Control type="number" onChange={onChange} />
        </Form.Group>
    );
};
