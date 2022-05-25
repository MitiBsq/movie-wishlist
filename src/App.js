import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import WishList from "./components/WishList";

function App() {
  const [showWishList, setShowWishList] = useState(false);

  const showTheBox = () => {
    setShowWishList(prev => !prev);
  }

  return (
      <div>
        <Header showTheBox={showTheBox}/>
        <Main />
        {showWishList && <WishList showTheBox={showTheBox}/>}
      </div>
  );
}

export default App;
