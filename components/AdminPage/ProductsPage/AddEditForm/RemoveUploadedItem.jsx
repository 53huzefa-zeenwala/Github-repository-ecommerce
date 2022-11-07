export default function RemoveUploadedItem({ setModal, removeItem, title }) {
    return (
        <div className="h-screen w-full fixed z-50 top-0 right-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className=" overflow-y-auto overflow-x-hidden z-50 md:w-3/5 w-full md:inset-0 h-min">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* <!-- Modal header --> */}
                        {/* <!-- Modal body --> */}
                        <div className="space-y-1 gap-2 py-6 px-4 flex flex-col relative">
                            <h3 className="text-xl font-semibold text-gray-900 text-center">
                                {title}
                            </h3>
                        </div>
                        <div className="flex items-center px-6 py-4 space-x-3 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <button onClick={removeItem} type="button" className="text-white bg-[#cc3300c7] hover:bg-[#cc3300] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg px-5 py-2.5 text-center ">Delete</button>
                            <button onClick={() => setModal({ item: "", isOpen: false })} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-semibold px-5 py-2.5 hover:text-gray-900 focus:z-10">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
