import Card from "./Components/Card";
import Center1 from "./Components/Center1";
import Nabvbar from "./Components/Nabvbar";

const App = () => {
  return (
    <div>
      <Nabvbar />
      <Center1 />

      {/* Scroll Area */}
      <div className="overflow-x-auto no-scrollbar mx-10">
        <div className="flex flex-nowrap gap-6 px-6">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
