import PortView from "@/components/portfolioList";
import connectDB from "@/database/db";
import PortF from "@/database/portSchema";
import { Key } from "react";
/* eslint-disable @typescript-eslint/no-explicit-any */

async function getPorts() {
  await connectDB(); // function from db.ts before

  try {
    const lists = await PortF.find().orFail();
    return lists;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default async function portfolio() {
  const pList: any = await getPorts();
  return (
    <div>
      <h1 className="page-title">Portfolio</h1>
      {pList.map((list: any, index: Key) => (
        <PortView
          img={list.img}
          title={list.title}
          text={list.text}
          key={index}
        />
      ))}
    </div>
  );
}
