import { util } from "../lib/util";
import { Timer } from "./sub/Timer";

export const PomodoroSection: React.FC = (): JSX.Element => {
  console.log(util.time);
  return (
    <div className="prodogy-pomodoro-section">
      Welcome to the pomodoro section.
      <Timer />
    </div>
  );
};
