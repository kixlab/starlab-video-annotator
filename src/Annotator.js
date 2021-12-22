import React, { useState, useEffect } from "react";

import ReactImageAnnotate from "react-image-annotate";

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

const Annotator = (props) => {

    const [keyVal, forceUpdate] = useState(0);

    useEffect(() => {
        console.log("update");
        forceUpdate(n => !n);
    }, [props]);

    return (
        <ReactImageAnnotate
            key={keyVal}
            labelImages
            selectedImage={props.selectedImage}
            taskDescription="# Draw region around each animal."
            images={props.images}
            regionClsList={labels}
            regionTagList={attributes}
            enabledTools={["create-box"]}
            onExit={(out) => {
            // console.log(targetProxy);
            }}
        />
    )
}

export default Annotator;