import Calendar from "./components/Calendar";
import DateCard from "./components/DateCard";

const App = () => {
  return (
    <div className="bg-red-50 min-h-screen flex flex-col gap-8 justify-center items-center">
      <h1 className="text-4xl font-bold bg-blue-50 w-[936px]">2024, May</h1>
      <Calendar />
    </div>
  );
};

export default App;
