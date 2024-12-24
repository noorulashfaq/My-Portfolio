import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive Design",
        description:
            "Crafting websites and applications that adapt seamlessly to all devices, ensuring an optimal user experience on any platform.",
    },
    {
        id: 2,
        image: Image2,
        title: "Full Stack Development",
        description:
            "Developing end-to-end web applications, handling both frontend and backend, to deliver scalable, and feature-rich solutions.",
    },
    {
        id: 3,
        image: Image3,
        title: "Guidance & Support",
        description:
            "Providing expert advice and ongoing support to help you navigate technical challenges and ensure the success of your projects.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services