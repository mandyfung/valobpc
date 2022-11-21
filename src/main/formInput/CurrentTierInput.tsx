import { Form } from "react-bootstrap";
import { battlePassTiers } from "../experience";

interface IProps {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CurrentTierInput = ({ onChange }: IProps) => {
    return (
        <Form.Group className="mb-3" controlId="currentBattlePassTier">
            <Form.Label>Current battle pass tier</Form.Label>
            <Form.Select onChange={onChange}>
                {battlePassTiers()
                    .map((_tier, index) => <option key={index}>{index}</option>)
                    .slice(2)}
            </Form.Select>
        </Form.Group>
    );
};
