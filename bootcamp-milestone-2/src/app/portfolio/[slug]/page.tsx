import React from "react";
import Image from "next/image";
import ProjectModel from "@/database/projectSchema";

type Props = {
  params: { slug: string };
};

export default async function Portfolio({ params: { slug } }: Props) {}
