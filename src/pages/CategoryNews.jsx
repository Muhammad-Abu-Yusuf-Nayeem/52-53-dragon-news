import { useLoaderData } from "react-router-dom";

const CategoryNews = () => {
    const {data} = useLoaderData();
    console.log(data);
    return (
        <div>
            category news page
            <p>{data.length}</p>
        </div>
    );
};

export default CategoryNews;