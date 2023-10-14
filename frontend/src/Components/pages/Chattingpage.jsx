
const Chattingpage = (data) => {

    const currentUserChat = data;

    console.log("data from chatting page", currentUserChat.data.name);

    return (
        <div className="flex flex-col w-[100%] ">
            {currentUserChat.data.name}
        </div>
    )

}
export default Chattingpage