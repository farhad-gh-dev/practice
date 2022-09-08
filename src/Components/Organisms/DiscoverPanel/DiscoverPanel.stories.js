import React from "react";

import DiscoverPanel from "./DiscoverPanel";

export default {
  title: "Organism/DiscoverPanel",
  component: DiscoverPanel,
};

const Template = (args) => <DiscoverPanel {...args} />;

const dummyData = [
  {
    i: {
      height: 160,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZTA2ODdjMDItYzNmNC00ZjY4LTkzOGYtNjdmYTJjZGFlMGZjXkEyXkFqcGdeQXVyNzg5ODk3MTk@.jpg",
      width: 160,
    },
    id: "/toronto",
    l: "Toronto International Film Festival",
    s: "IMDb Coverage of the Toronto International Film Festival",
  },
  {
    i: {
      height: 1500,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
      width: 1102,
    },
    id: "tt0944947",
    l: "Game of Thrones",
    q: "TV series",
    qid: "tvSeries",
    rank: 5,
    s: "Emilia Clarke, Peter Dinklage",
    y: 2011,
    yr: "2011-2019",
  },
  {
    i: {
      height: 500,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BYTM3N2ZiZTgtYjlhOC00NGI2LTk5MWItNDBiOGVhZmNhMzZkXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg",
      width: 500,
    },
    id: "tt13380510",
    l: "Game of Thrones",
    q: "video",
    qid: "video",
    rank: 1261,
    s: "Roy Dotrice",
    y: 2003,
  },
  {
    i: {
      height: 1000,
      imageUrl:
        "https://m.media-amazon.com/images/M/MV5BZjEyZTdhNDMtMWFkMS00ZmRjLWEyNmEtZDU3MWFkNDEzMDYwXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      width: 666,
    },
    id: "tt0091605",
    l: "The Name of the Rose",
    q: "feature",
    qid: "movie",
    rank: 4483,
    s: "Sean Connery, Christian Slater",
    y: 1986,
  },
];

export const Standard = Template.bind({});
Standard.args = {
  data: dummyData,
};
