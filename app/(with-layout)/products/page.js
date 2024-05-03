"use client";

import FilterSection from "./productComponent/FilterSection";
import Sort from "./productComponent/Sort";
import ProductList from "./productComponent/ProductList";
import { useGetProductsQuery } from "../../redux/api";

const Products = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    console.log(data);
    const somedata = [
        {
            img: "https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg",
            title: "Nike Air Monarch IV",

            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "220",
            company: "Nike",
            color: "white",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
            title: "Nike Air Vapormax Plus",

            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "250",
            company: "Nike",
            color: "red",
            category: "sneakers",
        },

        {
            img: "https://m.media-amazon.com/images/I/51+P9uAvb1L._AC_UY695_.jpg",
            title: "Nike Waffle One Sneaker",

            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "300",
            company: "Nike",
            color: "green",
            category: "sneakers",
        },
        {
            img: "https://m.media-amazon.com/images/I/71oEKkghg-L._AC_UX575_.jpg",
            title: "Nike Running Shoe",

            reviews: "(123 reviews)",
            prevPrice: "$140,00",
            newPrice: "100",
            company: "Adidas",
            color: "black",
            category: "sneakers",
        },
    ];
    const minToMaxData = somedata
        .slice()
        .sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));

    // Sort by 'newPrice' property in descending order (maximum to minimum)
    const maxToMinData = somedata
        .slice()
        .sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));

    console.log("Minimum to Maximum Data:", minToMaxData);
    console.log("Maximum to Minimum Data:", maxToMinData);

    return (
        <div className="Container pt-[90px] ">
            <div className="grid md:grid-cols-3 ">
                <div className="md:col-span-1">
                    <FilterSection />
                </div>
                <div className="md:col-span-2">
                    <Sort />
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default Products;
