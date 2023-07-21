interface CardProps {
  emoji: string;
  name: string;
  category: string;
  group: string;
  htmlCode: string;
}

export default function Card({
  emoji,
  name,
  category,
  group,
  htmlCode,
}: CardProps) {
  return (
    <div className="py-10 p-4 bg-gray-50 rounded-2xl w-4/4 flex gap-8 items-center">
      <div className="text-5xl">{emoji}</div>
      <div className="flex flex-col space-y-4">
        <div>
          <div className="text-xs font-bold uppercase text-gray-400">Name</div>
          <div className="font-bold">{name}</div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase text-gray-400">
            Category
          </div>
          <div className="text-xl">{category}</div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase text-gray-400">Group</div>
          <div className="text-xl">{group}</div>
        </div>
        <div>
          <div className="text-xs font-bold uppercase text-gray-400">
            Html Code
          </div>
          <div className="p-2 bg-gray-200 rounded font-semibold font-mono w-24">
            {htmlCode}
          </div>
        </div>
      </div>
    </div>
  );
}
