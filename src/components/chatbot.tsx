import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

export default function Chatbot() {
    return (
        <div className="fixed bottom-20 right-0 mr-8">
            <button className="bg-black rounded-full p-4 lg:p-5 hover:scale-110 transition-all">
                <ChatBubbleIcon htmlColor='white' fontSize='medium' />
            </button>
        </div>
    )
}