
import { FaStar, FaCartArrowDown, FaRegEye, FaRegHeart } from "react-icons/fa";

import styles from './ProductCard.module.css'

function ProductCard({ product }) {

    const { id, img, name, price, ratingsCount
    } = product;
    console.log(product);
    return (
        <div className={styles.mainContent}>
            <div className=" bg-[#f9f9fa] mx-auto ">
                <div className={styles.cardContent}>
                    <img src={img} className=" mx-auto" ></img>
                    <table className={styles.tableContent}>
                        <tbody>
                            <tr className=" border
                         border-collapse flex bg-white ">
                                <td className="h-9 w-11 border
                         border-collapse flex items-center justify-center"><FaRegEye></FaRegEye></td>
                                <td className="h-9 w-11 border
                         border-collapse flex items-center justify-center"><FaCartArrowDown></FaCartArrowDown></td>
                                <td className="h-9 w-11 border
                         border-collapse flex items-center justify-center"><FaRegHeart></FaRegHeart></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className=" px-2 py-6">
                    <h3 className="font-bold text-[14px] ">{name}</h3>
                    <div className="my-1 flex  gap-[2px]">
                        <FaStar className='text-yellow-400 ' ></FaStar>
                        <FaStar className='text-yellow-400 ' ></FaStar>
                        <FaStar className='text-yellow-400 ' ></FaStar>
                        <FaStar className='text-yellow-400 ' ></FaStar>
                        <small className="text-gray-700  mx-1">{ratingsCount
                        }</small>
                    </div>
                    <p>Price : <span className="text-[#ff497c] font-bold">{price} BDT</span></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;