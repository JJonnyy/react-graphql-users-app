import { Message } from "../graphql/generated"; // Make sure this points to the correct path
import { Branch } from "./Branch";

type Props = {
    message: Message;
    index: number;
}

export const MessageDisplay = ({ message, index }: Props) => {
    return (
        <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
            <Branch trunk={index === 0} />
            <p className="text-sm text-gray-200 font-bold px-4">
                {message.body ?? 'No content'}
            </p>
        </div>
    );
}
