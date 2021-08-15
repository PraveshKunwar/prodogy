import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/Footer";
import { GoalSection } from "../components/Goals";
import { PomodoroSection } from "../components/Pomodoro";
import { TaskCreatorSection } from "../components/TaskCreator";

const HomePage: NextPage = (): JSX.Element => {
  return (
    <div className="prodogy-home-app">
      <h1>Pomodoro timer</h1>
      <PomodoroSection />
      <h1>Task creator</h1>
      <TaskCreatorSection />
      <h1>Goals</h1>
      <GoalSection />
      <Footer />
    </div>
  );
};

export default HomePage;
