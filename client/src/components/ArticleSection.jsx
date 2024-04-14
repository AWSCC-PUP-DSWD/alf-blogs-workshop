import React, { useEffect, useState } from "react";
import "../styles/ArticleSection.css";
import Button from "./Button";
import CardsContainer from "./CardsContainer";
import RegularCard from "./RegularCard";
import Searchbar from "./Searchbar";
import Blur from "./Blur";

const ArticleSection = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [cards, setCards] = useState([
    { _id : 1, title: "Title", date: Date.now(), cover_photo: "/preview.png", content: "Content 123"},
    { _id : 2, title: "Title asdASDasd", date: Date.now(), cover_photo: "/preview.png", content: "Aak adadasd 123"},
    { _id : 3, title: "Title Dsadasds ", date: Date.now(), cover_photo: "/preview.png", content: "Content 123asdas ddfasdasa"},
  ]);

  const isCardMatch = (val, card) => {
    const titleMatch = card.title.toLowerCase().includes(val.toLowerCase().trim());
    return (val.length != 0 && titleMatch) || val.length == 0;
  };

  const handleCardSearch = (value) => {
    const cardsMatched = [];

    setSearchText(value);
    cards.forEach((card) => {
      if (isCardMatch(value, card)) {
        cardsMatched.push(<RegularCard key={card._id} {...card} />);
      }
    });

    setSearchResult(cardsMatched);
  };

  useEffect(() => {
    handleCardSearch(searchText);

    const fetchData = async () => {
      
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
        const data = await res.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }

    };

    fetchData();

  }, []);

  return (
    <div id="articleSection">
      <Blur
        h={"60%"}
        w={"45%"}
        bg={"#7000FF"}
        x={"0"}
        y={"25%"}
        opacity={0.15}
        blur={"400px"}
        translate_x={"-50%"}
        translate_y={"-50%"}
        border_radius={"100%"}
      />
      <Blur
        h={"50%"}
        w={"35%"}
        bg={"#60FFE7"}
        x={"80%"}
        y={"80%"}
        opacity={0.15}
        blur={"400px"}
        translate_x={"-50%"}
        translate_y={"-50%"}
        border_radius={"100%"}
      />

      <div className="article-sec-heading-container">
        <p className="article-sec-heading">Learn About Everything Tech!</p>
        <p className="article-sec-subheading">brought to you by AWSCC Department of Software and Web Development</p>
      </div>

      {cards.length > 0 && (
        <div className="article-top-container">
              <Button variant="primary">
                Create Article
              </Button>
          <Searchbar searchText={searchText} onSearchChange={handleCardSearch} />
        </div>
      )}

      <CardsContainer isEmpty={cards.length === 0} filterResult={searchResult} searchText={searchText} />
    </div>
  );
};

export default ArticleSection;
