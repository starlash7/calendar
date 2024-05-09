import DateCard from "./DateCard";

const calendarData = [
  { date: 1, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 2, isHoliday: false, todos: ["💵 돈벌기"] },
  { date: 3, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🧹 청소하기"] },
  { date: 4, isHoliday: false, todos: ["🏃‍♀️ 달리기", "🧹 청소하기"] },
  { date: 5, isHoliday: false, todos: ["🎂 케익구매", "🧹 청소하기"] },
  { date: 6, isHoliday: true, todos: ["🏃‍♀️ 달리기", "🧹 청소하기"] },
  { date: 7, isHoliday: false, todos: ["🥎 테니스보기"] },
  { date: 8, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 9, isHoliday: false, todos: ["🍯 꿀구매", "🎥 영화감상"] },
  { date: 10, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 11, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 12, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 13, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 14, isHoliday: false, todos: ["🎂 케익구매", "🧹 청소하기"] },
  { date: 15, isHoliday: true, todos: ["🎥 영화감상"] },
  { date: 16, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 17, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 18, isHoliday: false, todos: ["🍯 꿀구매", "🎥 영화감상"] },
  { date: 19, isHoliday: false, todos: ["⚾️ 야구보기", "🏊 다이빙가기"] },
  { date: 20, isHoliday: false, todos: ["🍯 꿀구매", "🎥 영화감상"] },
  { date: 21, isHoliday: false, todos: ["⚾️ 야구보기", "🏊 다이빙가기"] },
  { date: 22, isHoliday: false, todos: ["⚾️ 야구보기", "🏊 다이빙가기"] },
  { date: 23, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 24, isHoliday: false, todos: ["🎥 영화감상"] },
  { date: 25, isHoliday: false, todos: ["⚾️ 야구보기", "🏊 다이빙가기"] },
  { date: 26, isHoliday: false, todos: ["🥎 테니스보기"] },
  { date: 27, isHoliday: false, todos: ["🎨 그림그리기"] },
  { date: 28, isHoliday: false, todos: ["🥎 테니스보기"] },
  { date: 29, isHoliday: false, todos: ["🏃‍♀️ 달리기", "💵 돈벌기"] },
  { date: 30, isHoliday: false, todos: ["🎨 그림그리기"] },
  { date: 31, isHoliday: false, todos: ["⚾️ 야구보기", "🏊 다이빙가기"] },
];

const Calendar = () => {
  return (
    <ul className="bg-blue-50 grid grid-cols-7 gap-4">
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>
      <li className="bg-purple-100 w-[120px] h-[200px] text-xl rounded-md"></li>

      {/*   map함수 기본구조    {calendarData.map(() => ())} */}
      {/*       {calendarData.map((v, i) => ())} */}
      {calendarData.map((v, i) => (
        <DateCard
          key={i}
          date={v.date}
          isHoliday={v.isHoliday}
          todos={v.todos}
        />
      ))}
    </ul>
  );
};

export default Calendar;
