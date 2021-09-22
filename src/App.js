import css from './App.module.css'
import SearchInputContainer from "./components/withHooks/searchInput/searchInputContainer"
import SearchClassContainer from "./components/withClassis/searchClass/searchClassContainer"


function App() {
  return (
    <div className = {css.container}>
     <SearchInputContainer />
     <SearchClassContainer />
     <div></div>
    </div>
  );
}

export default App;
