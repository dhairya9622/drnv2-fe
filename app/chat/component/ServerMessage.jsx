// components/component/ServerMessage.jsx
export function ServerMessage({ text }) {
    return (
        <div className="flex justify-start w-full">
            <div className="rounded-tl-lg rounded-tr-lg rounded-br-lg bg-transparent px-4 py-3 text-white shadow-md max-w-xs break-words">
                <p className="font-serif">{text}</p>
            </div>
        </div>
    );
}
