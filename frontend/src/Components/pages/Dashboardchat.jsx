import Recentchat from "./Recentchat"
import Chattingpage from "./Chattingpage"
import "../css/Dashboard.css";
import { useState } from "react";


export const userData = [
    {
        id: 1,
        name: "Ankit",
        mobile: 6388946784,
        imageUrl: "https://www.shareicon.net/data/512x512/2016/09/15/829472_man_512x512.png",
    },
    {
        id: 2,
        name: "Aniket",
        mobile: 6388946784,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT73s9z2T_I9BOpGKQpuOL2s8ZCNLNwAnmiFb-5Rjky8-nhfNltVnKKKSdRfsmYQQIwkzQ&usqp=CAU",
    },
    {
        id: 3,
        name: "Bigul",
        mobile: 6388946784,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5kRPhcSuexcbrGlrvAG4-UtcBX94GHz9Nsb0gzoReBs5SEccXizz0aom7HwhbWZhQnQ&usqp=CAU",
    },
    {
        id: 4,
        name: "Umar",
        mobile: 6388946784,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwXs9hTDAZHCUxXgauesSyN842RuKLzmKUATm0bBNeodteaBHdCOaCGFBIMkFHj-QKVE&usqp=CAU",
    },
    {
        id: 5,
        name: "Kunal",
        mobile: 6388946784,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOdZJlzGgsaxupEmN1jGhRIn41F0Y-0ZR7A&usqp=CAU",
    }
]


const Dashboardchat = () => {

    const [userIndex, SetUserIndex] = useState(0);

    const handleChildData = (data) => {
        const index = userData.findIndex((a) => a.id === +data);
        SetUserIndex(index);
    };

    return (
        <div className="flex main-div">
            <Recentchat allUserdata={userData} onChildData={handleChildData} />
            <Chattingpage data={userData[userIndex]}/>
        </div>
    )
}
export default Dashboardchat