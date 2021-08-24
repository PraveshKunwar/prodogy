import { Timer } from "./sub/Timer";

export const PomodoroSection: React.FC = (): JSX.Element => {
  return (
    <div className="prodogy-pomodoro-section">
      Welcome to the pomodoro section.
      <Timer />
    </div>
  );
};
