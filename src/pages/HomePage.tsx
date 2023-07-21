import { useQuery } from "@tanstack/react-query";
import {
  EmojiResponse,
  getEmojis,
  renderEmojisFromUnicode,
} from "../libs/utils";
import Card from "../components/Card";
import { useState } from "react";

export default function HomePage() {
  // Queries

  const [category, setCategory] = useState("all"); // ["all", "smileys-and-people", et

  const query = useQuery({
    queryKey: ["emojis", category],
    queryFn: () => getEmojis(category),
  });

  if (query.isError) return <div>Error occured</div>;

  return (
    <div className="p-16 flex flex-col gap-16">
      <div className="flex flex-col gap-2">
        <label htmlFor="categories" className="font-semibold">
          Choose Category
        </label>
        <select
          name="categories"
          id=""
          className="bg-gray-100 border rounded-lg p-2"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="smileys-and-people">Smileys & Emotion</option>
          <option value="animals-and-nature">Animals & Nature</option>
          <option value="food-and-drink">Food & Drink</option>
          <option value="travel-and-places">Travel & Places</option>
          <option value="activities">Activities</option>
          <option value="objects">Objects</option>
          <option value="symbols">Symbols</option>
          <option value="flags">Flags</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {query.data?.map((emoji: EmojiResponse) => (
          <Card
            emoji={renderEmojisFromUnicode(emoji.unicode[0])}
            name={emoji.name}
            category={emoji.category}
            group={emoji.group}
            htmlCode={emoji.htmlCode[0]}
          />
        ))}
      </div>
    </div>
    //convert the htmlsCode to emoji
  );
}
