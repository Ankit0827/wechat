import { Link } from 'react-router-dom'

import "../css/Recentchat.css"


const Recentchat = ({ allUserdata, onChildData }) => {
    const mockData = allUserdata;

    const sendDataToParent = (id) => {
        onChildData(id);
    }


    return (

        <div className="flex">
            <div className="flex flex-1 flex-col  p-2 font-bold border-2 border-b-2 recent-width ">
                <div>
                    <h1>Chat</h1>
                </div>
                <div>
                    {
                        mockData?.map((res, index) => (
                            <div className="border-2 border-b-black mt-3" onClick={() => sendDataToParent(res.id)} key={res.id}>
                                <Link to={`/Dashboardchat`}>
                                    <div className='parent-div flex p-2'>
                                        <div className='img-div'>
                                            <img className='profile-image' src={res.imageUrl} alt="user-profile"></img>
                                        </div>
                                        <div className='name-div flex items-center mx-2'>
                                            <span>{res.name}</span>
                                        </div>
                                    </div>
                                    </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Recentchat