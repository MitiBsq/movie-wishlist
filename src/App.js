import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import WishList from "./components/WishList";

function App() {
  //We use it to store data from cookies
  const [cookieData, setCookieData] = useState([]);
  //We use it to display the wishlist (conditional)
  const [showWishList, setShowWishList] = useState(false);
  //We use it as a redux method to update the page without refreshing it
  const [update, setUpdate] = useState(false);

  //Life-Cycle Method to update the list with Redux method
  useEffect(() => {
    const takeData = () => {
      const transformCookie = document.cookie.split('=')[1];
      if (transformCookie !== undefined) {
        setCookieData(transformCookie.split(','));
      } else {
        setCookieData([]);
      }
    }
    takeData();
  }, [update]);

  const showTheBox = () => {
    setShowWishList(prev => !prev);
  }

  return (
    <div>
      <Header showTheBox={showTheBox} wishListLength={cookieData.length} />
      <Main update={() => setUpdate(!update)} />
      {showWishList && <WishList showTheBox={showTheBox} data={cookieData} update={() => setUpdate(!update)} />}
    </div>
  );
}

export default App;