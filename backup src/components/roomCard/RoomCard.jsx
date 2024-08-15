import { useNavigate } from "react-router";
import { useContext } from "react";
import Loader from "../loader/Loader";
import myContext from "../../context/myContext";

const RoomCard = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllRoom, mode } = context;

    const filterData = getAllRoom.slice(0, 8)

    console.log(filterData)

    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className={`text-center mb-5 text-2xl font-semibold ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Recent offers</h1>
            </div>

            {/* main 1 */}
            <section className="text-gray-600 body-font">
                {/* main 2 */}
                <div className="container px-5 py-5 mx-auto">


                    {/* main 3  */}
                    {loading ? <div className="flex justify-center">
                        <Loader />
                    </div>

                        :

                        <div className="flex flex-wrap justify-center -m-4">
                            {filterData.length > 0 ?
                                <>
                                    {filterData.map((item, index) => {
                                        const { id, name, price, image, bathrooms, furnished, bedrooms, userId, type } = item;
                                        console.log(item)
                                        return (
                                            <div key={index} className="p-4 w-full md:w-1/4">
                                               <div className={`h-full shadow-md hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1 border ${mode === 'dark' ? 'border-gray-700' : 'border-gray-300'} rounded-xl overflow-hidden shadow-md cursor-pointer`}>
                                                    <img
                                                        onClick={() => navigate(`/roominfo/${id}/${userId}`)}
                                                        className="lg:h-60  h-96 w-full"
                                                        src={image != undefined && image[0]}
                                                        alt="img"
                                                    />
                                                    <div className="p-6">
                                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                            Calgary Help
                                                        </h2>
                                                        <h1 className={`title-font text-lg font-medium ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'} mb-2`}>
                                                            {name}
                                                        </h1>
                                                        <h1 className={`title-font text-lg font-medium fontPara mb-3 ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                                            $ {price} {type === 'rent' ? '/month' : ''}
                                                        </h1>

                                                        <div className={`flex justify-between ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>
                                                            <div className="flex items-center space-x-2">
                                                                <span className="text-sm">{bedrooms} Beds</span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-bed"
                                                                >
                                                                    <path d="M2 4v16" />
                                                                    <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                                                                    <path d="M2 17h20" />
                                                                    <path d="M6 8v9" />
                                                                </svg>


                                                            </div>

                                                            <div className="flex items-center space-x-1">
                                                                <span className="text-sm">{bathrooms} Baths</span>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width={24}
                                                                    height={24}
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth={2}
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    className="lucide lucide-bath"
                                                                >
                                                                    <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                                                                    <line x1={10} x2={8} y1={5} y2={7} />
                                                                    <line x1={2} x2={22} y1={12} y2={12} />
                                                                    <line x1={7} x2={7} y1={19} y2={21} />
                                                                    <line x1={17} x2={17} y1={19} y2={21} />
                                                                </svg>

                                                            </div>

                                                            <div className="flex items-center">
                                                                {furnished === "yes" ? "furnished" : "unfurnished"}

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </>
                                :
                                <div className=" flex justify-center">
                                    <img src="https://cdn-icons-png.flaticon.com/128/10437/10437326.png" className="w-20" alt="" />
                                </div>}
                        </div>

                    }
                </div>
            </section>
        </div>
    );
}

export default RoomCard;