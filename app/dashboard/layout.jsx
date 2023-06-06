import Link from "next/link";


function layout({ children }) {
    return (
        <div className="relative grid grid-cols-[220px,1fr] gap-2 ">
            <div className=" min-h-screen p-2 bg-slate-200 ">
                {/* absolute -left-48 lg:left-0 */}
                <ul>
                    <Link href='/dashboard/addProduct'> <li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2 cursor-pointer text-gray-700">Add Product</li></Link>
                    <Link href='/dashboard/summary'><li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">Order Summary</li></Link>
                    <Link href='/dashboard/progress'><li className="hover:bg-gray-900 hover:text-white duration-300 rounded-md px-4  py-2  cursor-pointer text-gray-700">Progress</li></Link>
                </ul>
            </div>
            <div className=" m-4">
                {children}
            </div>
        </div>
    );
};

export default layout;