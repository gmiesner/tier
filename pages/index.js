import Head from "next/head";
import Row from "../components/Row";
import React, { useState } from "react";
import Search from "../components/Search";
import { DragDropContext } from "react-beautiful-dnd";
import { resetServerContext } from "react-beautiful-dnd";

resetServerContext();

const Index = () => {
  const initialTiers = {
    S: ["IS&T 1561"], // course numbers as IDs
    A: ["FR ENG 1100" ],
    B: ["BIO SCI 1113"],
    C: ["IS&T 1750"],
    D: ["MATH 1120"],
  };
  const tierColors = {
    // thanks https://colorswall.com/palette/3297/
    S: "#CD6155",
    A: "#F0B27A",
    B: "#F9E79F",
    C: "#7DCEA0",
    D: "#5DADE2",
  };
  const [tiers, setTiers] = useState(initialTiers);
  const addClass = (number) => {
    setTiers({
      ...tiers,
      S: [...tiers.S, number],
    });
  };
  const removeCourse = (tier, number) => {
    console.log(`removing ${number} from ${tier}`);
    console.log(tiers[tier]);
    setTiers({
      ...tiers,
      [tier]: tiers[tier].filter((c) => c != number),
    });
  };
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let newDestOrder = tiers[destination.droppableId];
    let newSourceOrder = tiers[source.droppableId];
    if (destination === source) {
      newDestOrder.splice(source.index, 1);
      newDestOrder.splice(destination.index, 0, draggableId);
      setTiers({
        ...tiers,
        [destination.droppableId]: newDestOrder,
      });
    } else {
      newSourceOrder.splice(source.index, 1);
      newDestOrder.splice(destination.index, 0, draggableId);

      setTiers({
        ...tiers,
        [destination.droppableId]: newDestOrder,
        [source.droppableId]: newSourceOrder,
      });
    }
  };
  const META = {
    title: `MSTier: Tier rank MST classes`,
    description: `All in the title`,
    url: `https://mitier.vercel.app`,
    siteName: `MSTier`,
    image: `screenshot.jpg`,
    imageAlt: `Example tier list of MIT classes`,
  };
  return (
    <div>
      <Head>
        <title>{META.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta property="og:title" content={META.title} />
        <meta property="og:description" content={META.description} />
        <meta property="og:image" content={META.image} />
        <meta property="og:url" content={META.url} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:site_name" content={META.siteName} />
        <meta name="twitter:image" content={META.image} />
        <meta name="twitter:image:alt" content={META.imageAlt} />
      </Head>
       <h1> MSTier : Rank your classes</h1>
<img src = "https://brand.mst.edu/media/universityadvancement/brand/logos/athletics/mascotmarks/JOE_MINER_FC.png" height = "75rem" alt = "s&t joe miner"/>
      <header>
        <Search addClass={addClass} />
      </header>
      <section>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.keys(tiers).map((tierName) => {
            const color = tierColors[tierName];
            return (
              <Row
                removeCourse={removeCourse}
                key={tierName}
                title={tierName}
                items={tiers[tierName]}
                color={color}
              />
            );
          })}
        </DragDropContext>
      </section>
      <style jsx>{`
        header {
          margin-bottom: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Index;
