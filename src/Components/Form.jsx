const Form = () => {
    return(

        <div className="relative w-full pl-0">
                <img class="object-cover" src="../src/assets/HeroImage2.jpg"/>
                <div class="absolute inset-0 bg-gray-700 opacity-60"></div>
                <div class="absolute inset-0 flex flex-col items-center justify-center">

        <h1 className="text-white text-5xl font-bold pb-2">Get 10 New Quote-Ready Leads</h1>
        <h2 className="text-orange-500 text-2xl font-bold pb-5">Within 30 Days, or You Don't Pay</h2>
        <form class="max-w-lg mx-auto">
        <div class="mb-5">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Email" required />
        </div>
        <div class="mb-5">
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
            <input type="text" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Name" required />
        </div>
        <div class="mb-5">
            <label for="Phone Number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
            <input type="tel" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Phone Number" required />
        </div>
        <div class="flex items-start mb-5">
        </div>
        <button type="submit" class="text-white bg-orange-500 hover:bg-Orange-600 focus:ring-4 focus:outline-none focus:ring-orange-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700">Get More Leads</button>
        </form>

            </div>
        </div>

    );
}
export default Form;