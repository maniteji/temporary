import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";
import Layout from "../../components/layout/Layout";

const Properties = () => {
    const navigate = useNavigate();

    const context = useContext(myContext);
    const { loading, getAllRoom, mode } = context;


    const [search, setSearch] = useState("");

    const filterData = getAllRoom.filter((obj) => obj.name.toLowerCase().includes(search))


    return (
        <Layout>
            <div className="mt-5 lg:mt-10">
                {/* Heading  */}
                <div className=" container px-5 mx-auto flex flex-wrap justify-between items-center">
                    <h1 className={` mb-5 text-2xl font-semibold ${mode === 'dark' ? 'text-gray-200' : 'text-gray-900'}`}>Properties</h1>
                    <input type="text"
                        placeholder="Search here..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={`  border rounded-lg   ${mode === 'light' ? 'border-gray-300' : 'border-gray-700'}
                        outline-none
                        ${mode === 'light' ? 'bg-gray-200' : 'bg-gray-900'} w-[43em] py-1.5 px-2`} />
                </div>



                {/* main 1 */}
                <section className="text-gray-600 body-font">
                    {/* main 2 */}
                    <div className="container px-5 py-5 mx-auto">

                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        {/* main 3  */}
                        <div className="flex flex-wrap -m-4">
                            {filterData.length > 0 ?
                                <>
                                    {
                                        filterData.map((item, index) => {
                                            const { id, name, price, image, bathrooms, furnished, bedrooms, userId, type } = item;
                                            return (
                                                <div key={index} className="p-4 w-full md:w-1/4">
                                                    <div className={`h-full shadow-md  hover:-translate-y-1 border ${mode === 'dark' ? 'border-gray-700' : 'border-gray-300'}  rounded-xl overflow-hidden shadow-md cursor-pointer`}>
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
                                                                $ {price}{type === 'rent' ? '/month' : ''}
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
                                        })
                                    }

                                </>
                                :
                                <h1>Not Found</h1>}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Properties;