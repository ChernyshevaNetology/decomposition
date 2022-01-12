import "./App.css";
import Featured from "./components/featured";
import MainBanner from "./components/mainBanner";
import Maps from "./components/maps";
import MenuItems from "./components/menuItems";
import NewsTitles from "./components/newsTitles";
import TVGuide from "./components/tv-guide";
import SearchBar from "./components/searchBar";

function App() {
  return (
    <div className="App">
      <Featured />
      <MainBanner />
      <Maps />
      <MenuItems />
      <NewsTitles />
      <SearchBar />
      <TVGuide />
    </div>
  );
}

export default App;
