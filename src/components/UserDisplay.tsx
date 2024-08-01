import { User } from '../graphql/generated'; // Make sure this points to the correct path
import { MessageDisplay } from "./MessageDisplay";

type Props = {
    user: User;
}

export const UserDisplay = ({ user }: Props) => {
    return (
        <div className="flex gap-x-24 justify-center">
            <div className="rounded-sm flex justify-center items-center drop-shadow-md bg-neutral-700 w-48 h-20">
                <p className="text-xl text-gray-200 font-bold">
                    {user.name ?? 'Unknown User'}
                </p>
            </div>
            <div>
                {user.messages?.map((message, i) =>
                    message && <MessageDisplay key={i} index={i} message={message} />
                )}
            </div>
        </div>
    );
}
