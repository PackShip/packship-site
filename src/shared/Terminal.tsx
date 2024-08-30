import { TerminalProps, Command } from "../../types";

export default function Terminal({ commands }: TerminalProps) {
  return (
    <div className="w-full max-w-screen-sm">
      <div className="w-full h-4 bg-gray-400 rounded-t-lg"></div>
      <div className="w-full bg-gray-800 rounded-b-lg p-4 text-white text-lg">
        {commands.map((command, index) => (
          <div key={index} className="flex gap-2">
            <span className="text-packship-red font-bold">$</span>
            {command.type === "comment" ? (
              <span className="text-gray-500">{command.text}</span>
            ) : command.type === "command" ? (
              <span>
                <span className="text-green-500 font-bold">
                  {command.text.split(" ")[0]}
                </span>{" "}
                <span className="text-white">
                  {command.text.split(" ").slice(1).join(" ")}
                </span>
              </span>
            ) : (
              <span className="text-packship-red">{command.text}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}