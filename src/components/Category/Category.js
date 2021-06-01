import React from 'react';
import './Category.css';
import categoryImg from '../../images/category_img.jpg';
import { Link } from 'react-router-dom';

const categories = [
    {
        categoryTitle: 'Cloth',
        categoryImg: 'https://i.ibb.co/54Zq3k4/Cloth-Banner.jpg'
    },
    {
        categoryTitle: 'Electronics',
        categoryImg: 'https://i.ibb.co/g4DRfVc/Electronics-Banner.jpg'
    },
    {
        categoryTitle: 'Groceries',
        categoryImg: 'https://i.ibb.co/VCk2sfJ/Grocery-Banner.png'
    },
    {
        categoryTitle: 'Crockeries',
        categoryImg: 'https://i.ibb.co/nnQY52f/Crockeries-Banner.jpg'
    },
    {
        categoryTitle: 'Home Appliances',
        categoryImg: 'https://i.ibb.co/brbwnPJ/Home-Appliences-Banner.jpg'
    },
    {
        categoryTitle: 'Sports & Fitness',
        categoryImg: 'https://i.ibb.co/Qfds9rB/category-img.png'
    },
]
const Category = () => {



    return (
        <section className="container mt-5 pt-5">
            <h1 className="text-center my-5 text-uppercase section-name">Categories</h1>
            <div className="row d-flex px-5 align-items-center justify-content-center">

                {
                    categories.map(category => {
                        return (
                            <Link to={`/category/${category.categoryTitle}`} className="col-md-4 col-sm-6 mb-3">
                                <div class="card category-card">
                                    <img src={category.categoryImg} height="150px" class="card-img" alt="..." />
                                    <div class="card-img-overlay category-card-overlay">
                                        <div className="m-auto text-center">
                                            <h2 class="fw-bolder mt-4">{category.categoryTitle}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>

        </section>
    );
};

export default Category;