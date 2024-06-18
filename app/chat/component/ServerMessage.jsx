// components/component/ServerMessage.jsx
import {ReactTyped} from "react-typed";

export function ServerMessage({ text }) {
    return (
        <div className="flex justify-start w-full">
            <div className="rounded-tl-lg rounded-tr-lg rounded-br-lg
                bg-transparent px-4 py-3 text-white shadow-md max-w-xs break-words">
                <p className="font-serif"><ReactTyped strings={[text]}
                                                      typeSpeed={20}
                                                      cursorChar={''}/></p>
            </div>
        </div>
    );
}
