import React from 'react'
import styles from '../../../../../styles/Adminpage/ProductsPage/AddEditProduct.module.css'

export default function Modal({  newFilterData, setNewFilterData, addNewFilterToDatabase, error, closeModal }) {
    
    return (
        <div className="h-screen w-full fixed z-50 top-0 right-0 left-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className=" overflow-y-auto overflow-x-hidden z-50 md:w-3/5 w-full md:inset-0 h-min">
                <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow">
                        {/* <!-- Modal header --> */}
                        <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900">
                                Add New Filter
                            </h3>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="space-y-1 gap-2 py-6 px-4 flex flex-col relative">
                            <div className={styles.form}>
                                <input type="text" placeholder='Filter...' name='filter' maxLength={20} className="text-lg" value={newFilterData} onChange={e => setNewFilterData(e.target.value)} />
                            </div>
                            {error && <div className='flex items-center gap-2 px-3 text-sm font-semibold text-red-600'> <img className='w-6' src="/alert-svgrepo-com.svg" alt="" /> Filter Atleast Consist Of Four Letter.</div>}
                        </div>
                        <div className="flex items-center px-6 py-4 space-x-3 rounded-b border-t border-gray-200 dark:border-gray-600">
                            <input value="Add Filter" onClick={addNewFilterToDatabase} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center "/>
                            <input value='Cancel' onClick={closeModal} type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-base font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 " />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
