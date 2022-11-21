import { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import "../resource/Main.css";
import { CalculatedResults } from "./CalculatedResults";
import { calculateXPNeededWithDailies, calculateXPNeededWithoutDailies } from "./calculator";
import { CurrentTierExpInput } from "./formInput/CurrentTierExpInput";
import { CurrentTierInput } from "./formInput/CurrentTierInput";
import { CurrentWeekInput } from "./formInput/CurrentWeekInput";
import { WeeklyMissionInput } from "./formInput/WeeklyMissionInput";
import { Header } from "./Header";
import { ExpNeeded, UserInput } from "./types";

function Main() {
    const [showResults, setShowResults] = useState(false);
    const [calculatedResults, setCalculatedResults] = useState<ExpNeeded>({
        xpNeededWithDailies: undefined,
        xpNeededWithoutDailies: undefined,
    });
    const [formData, setFormData] = useState<UserInput>({
        currentWeek: 0,
        numWeeklyCompleted: 0,
        currentTier: 0,
        completedXP: 0,
    });

    const onChangeWeek = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            currentWeek: Number(event.target.value),
        }));
    };

    const onChangeMissions = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            numWeeklyCompleted: Number(event.target.value),
        }));
    };

    const onChangeTier = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            currentTier: Number(event.target.value),
        }));
    };

    const onChangeTierExp = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            completedXP: Number(event.target.value),
        }));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const xpNeededWithoutDailies = calculateXPNeededWithoutDailies(
            50,
            formData.currentTier,
            formData.completedXP,
            formData.currentWeek,
            formData.numWeeklyCompleted
        );

        const xpNeededWithDailies = calculateXPNeededWithDailies(
            50,
            formData.currentTier,
            formData.completedXP,
            formData.currentWeek,
            formData.numWeeklyCompleted
        );

        setCalculatedResults({
            xpNeededWithoutDailies: xpNeededWithoutDailies,
            xpNeededWithDailies: xpNeededWithDailies,
        });
        setShowResults(true);
    };

    return (
        <Container>
            <Header />
            <Row>
                <Form onSubmit={onSubmit}>
                    <CurrentWeekInput onChange={onChangeWeek} />
                    <WeeklyMissionInput onChange={onChangeMissions} />
                    <CurrentTierInput onChange={onChangeTier} />
                    <CurrentTierExpInput onChange={onChangeTierExp} />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Row>

            {showResults && (
                <Row>
                    <CalculatedResults results={calculatedResults} />
                </Row>
            )}
        </Container>
    );
}

export default Main;
