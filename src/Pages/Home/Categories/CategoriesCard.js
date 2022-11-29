import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categorie }) => {
    const { _id, title, icon } = categorie;
    // console.log(categorie)

    const handleCategory = () => {
        // console.log(categorie)

    }

    return (
        <div onClick={handleCategory} className="card bg-base-100 shadow-xl">
            <Link to={`/categorie/${_id}`}>
                <figure className="px-6 pt-10">
                    <img src={icon} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                </div>
            </Link>

        </div>
    );
};

export default CategoriesCard;