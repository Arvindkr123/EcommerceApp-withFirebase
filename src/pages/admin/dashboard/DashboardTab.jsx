import React, { useContext, useState } from 'react'
import MyContext from '../../../context/myContext'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';


const DashboardTab = () => {
    const { mode } = useContext(MyContext)
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className="container mx-auto m-10">
                <div className="tab container mx-auto ">
                    <Tabs defaultIndex={0} className=" " >
                        <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-4   md:justify-center mb-10 ">
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits />Products
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center ">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>

                        {/* Products */}
                        <TabPanel>
                            <div className='px-4 md:px-0 mb-16'>
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    Product Details
                                </h1>
                                <div className=" flex justify-end">
                                    <button
                                        type="button"
                                        className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                        <div className="flex gap-2 items-center">
                                            Add Product <FaCartPlus size={20} />
                                        </div>
                                    </button>
                                </div>
                                <div className="relative overflow-x-auto ">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-gray-50 border-b  dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    1.
                                                </td>
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    Name
                                                </td>
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    Address
                                                </td>
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    181919
                                                </td>
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    1991818818
                                                </td>
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    kkk@gmail.com
                                                </td>
                                                <td className="px-6 py-4 text-black " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    3 oct 2023
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </>
    )
}

export default DashboardTab