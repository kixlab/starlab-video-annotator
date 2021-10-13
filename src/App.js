import { makeStyles, Slider } from "@material-ui/core";

import React from "react";

import ReactImageAnnotate from "react-image-annotate";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const labels = [
  "person",
  "vegetable",
  "wrist",
  "cheese",
  "dish",
  "oven",
  "arm",
  "food",
  "tray",
  "watch",
  "hand",
  "ring",
  "butter",
  "flower",
  "bowl",
  "planter",
  "plant",
  "spoon",
  "countertop",
  "plate",
  "table",
  "dessert",
  "handle",
  "man",
  // asdf
  "hand",
  "food",
  "refrigerator",
  "label",
  "shelf",
  "case",
  "kitchen",
  "man",
  "tattoo",
  "knife",
  "clock",
  "hair",
  "countertop",
  "stove",
  "plant",
  "book",
  "eye",
  "table",
  "glass",
  "cabinet",
  "cutting board",
  "box",
  "bottle",
  "shirt",
  "board",
  "apron",
  "salad",
  "knife block",
  "bowl",
  "block",
  "knob",
  "pot",
  "plate",
  "drawer",
];
const attributes = [
  "black",
  "brown",
  "red",
  "yellow",
  "metal",
  "potted",
  "round",
  "silver",
  "cooked",
  "green",
  "gold",
  "extended",
  "sliced",
  "wood",
  "square",
  "small",
  "stainless steel",
  "gray",
  "sitting",
  "holding",
  "ceramic",
  "white",
  // asdf
  "wine",
  "gray",
  "large",
  "kitchen",
  "clear",
  "closed",
  "blue",
  "wood",
  "red",
  "open",
  "white",
  "black",
  "stacked",
  "glass",
  "brown",
  "sliced",
  "green",
  "cooking",
  "silver",
  "short",
  "round",
  "stainless steel",
  "empty",
  "smiling",
  "electric",
  "sitting",
  "small",
  "light brown",
  "tan",
  "dark",
  "potted",
  "metal",
  "yellow",
];

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <ReactImageAnnotate
        labelImages
        selectedImage="https://i.imgur.com/q6LJrtB.jpg"
        taskDescription="# Draw region around each animal."
        images={defaultData1}
        regionClsList={labels}
        regionTagList={attributes}
        enabledTools={["create-box"]}
        onExit={(out) => {
          // console.log(targetProxy);
        }}
      />
      <div>
        <li onClick={() => console.log(defaultData1[0])} />
        asdf
        <li />
        <div
          style={{
            marginRight: 50,
            marginLeft: 50,
            display: "inline-block",
            width: "15%",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            label threshold
          </div>
          <Slider
            orientation="horizontal"
            defaultValue={[30, 70]}
            aria-labelledby="vertical-slider"
            getAriaValueText={valuetext}
            marks={marks}
          />
        </div>
        <div
          style={{
            marginRight: 50,
            marginLeft: 50,
            display: "inline-block",
            width: "15%",
          }}
        >
          <div
            style={{
              textAlign: "center",
            }}
          >
            attribute threshold
          </div>
          <Slider
            orientation="horizontal"
            defaultValue={[30, 70]}
            aria-labelledby="vertical-slider"
            getAriaValueText={valuetext}
            marks={marks}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: 10,
        }}
      ></div>
    </div>
  );
};

export default App;
