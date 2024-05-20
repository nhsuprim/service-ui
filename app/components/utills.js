"use client";

const getData = async () => {
    const res = await fetch("https://api.pujakaitem.com/api/products", {
        next: { revalidate: 5 },
    });
    const data = await res.json();
    return data;
};

export { getData };
