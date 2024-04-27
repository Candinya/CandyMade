"use client";

import { roughAgo } from "@/utils/roughAgo";

interface RoughAgoProps {
  date: Date;
}
const RoughAgo = ({ date }: RoughAgoProps) => (
  <time dateTime={date.toISOString()}>{roughAgo(date)}前</time>
);

export default RoughAgo;
