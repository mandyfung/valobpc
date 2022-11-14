import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../resource/Main.css";
import {
    calculateXPNeededWithDailies,
    calculateXPNeededWithoutDailies,
} from "./calculator";
import { battlePassTierExperience, weeklyMissions } from "./experience";

function Main() {
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        console.log(
            calculateXPNeededWithoutDailies(
                50,
                formData.currentTier,
                formData.completedXP,
                formData.currentWeek,
                formData.numWeeklyCompleted,
                formData.remainingDays
            )
        );
        console.log(
            calculateXPNeededWithDailies(
                50,
                formData.currentTier,
                formData.completedXP,
                formData.currentWeek,
                formData.numWeeklyCompleted,
                formData.remainingDays
            )
        );

        setShowResult(true);
    };

    const [showResult, setShowResult] = useState(false);
    const [formData, setFormData] = useState({
        currentWeek: 0,
        numWeeklyCompleted: 0,
        currentTier: 0,
        completedXP: 0,
        remainingDays: 0,
    });

    return (
        <Container>
            <Row>
                <Form onSubmit={onSubmit}>
                    <Form.Group
                        className="mb-3"
                        controlId="finishedWeeklyMission"
                    >
                        <Form.Label>Current week</Form.Label>
                        <Form.Select
                            onChange={(event) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    currentWeek: Number(event.target.value),
                                }))
                            }
                        >
                            {weeklyMissions()
                                .map((_mission, index) => (
                                    <option>{index}</option>
                                ))
                                .slice(1)}
                        </Form.Select>
                        <Form.Text className="text-muted">
                            Which week are you currently on for your weekly
                            missions?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="finishedWeeklyMissionDetailed"
                    >
                        <Form.Label>
                            Weekly missions completed this week
                        </Form.Label>
                        <Form.Select
                            onChange={(event) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    numWeeklyCompleted: Number(
                                        event.target.value
                                    ),
                                }))
                            }
                        >
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            Out of the 3 weekly missions for this week, how many
                            did you finish?
                        </Form.Text>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="currentBattlePassTier"
                    >
                        <Form.Label>Current battle pass tier</Form.Label>
                        <Form.Select
                            onChange={(event) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    currentTier: Number(event.target.value),
                                }))
                            }
                        >
                            {battlePassTierExperience()
                                .map((_tier, index) => <option>{index}</option>)
                                .slice(2)}
                        </Form.Select>
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="completedXPForCurrentTier"
                    >
                        <Form.Label>
                            Completed XP for current battle pass tier
                        </Form.Label>
                        <Form.Control
                            type="number"
                            onChange={(event) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    completedXP: Number(event.target.value),
                                }))
                            }
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="remainingDays">
                        <Form.Label>
                            Remaining days in battle pass tier
                        </Form.Label>
                        <Form.Control
                            type="number"
                            onChange={(event) =>
                                setFormData((prevState) => ({
                                    ...prevState,
                                    remainingDays: Number(event.target.value),
                                }))
                            }
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>

            {showResult && (
                <Row>
                    <div>XP needed per day: {}</div>
                </Row>
            )}
        </Container>
    );
}

export default Main;
