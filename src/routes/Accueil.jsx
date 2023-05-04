import React from 'react';
// import Counter from '../components/Counter';
import CountUp from 'react-countup';

const Accueil = () => {
    const countersData = [
        {
            icon: <i className="fi fi-rr-users"></i>,
            count: 150,
            plus: true,
            title: 'Membres'
        },
        {
            icon: <i className="fi fi-rr-gamepad"></i>,
            count: 12,
            plus: false,
            title: 'Jeux différents'
        },
        {
            icon: <i className="fi fi-rr-calendar"></i>,
            count: 10,
            plus: false,
            title: 'Années d\'expériences'
        },
        {
            icon: <i className="fi fi-rr-trophy"></i>,
            count: 53,
            plus: false,
            title: 'Compétitions remportées'
        },
    ];


    return (
        <>
        <section id="hero">
        <div className="hero-container" data-aos="fade-up" data-aos-delay="150">
        <h1> ETS Esports </h1>
        <h2> On est en orbite, genre ça flotte dans l'espace </h2>
        </div>
        </section>

            <div className='container-fluid m-0 p-0 page-accueil'>
                {/* <div className='container-fluid m-0 p-0 home-top'>
                    <img src={require('../images/assets/hero-bg.jpg')} className='home-hero-bg' alt="" />
                </div> */}

            <div className="container px-4 py-5" id="featured-3">
                <h2 className="pb-2 border-bottom">Quelques chiffres</h2>
                <div className="row g-4 py-4 row-cols-lg-4 d-flex justify-content-end">
                    {countersData.map((counter, index) => {
                        return (
                            <div className="d-flex d-nowrap">
                                <div className="m-2" style={{fontSize: '3em'}}>{counter.icon}</div>
                                <div className='text-start'>
                                    <p className="fs-2 mb-0"><CountUp duration={5} end={counter.count}/>{counter.plus && '+'}</p>
                                    <p>{counter.title}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className="p-5 text-center bg-body-tertiary">
                <div className="container py-5">
                <h1 className="text-body-emphasis">Full-width jumbotron</h1>
                <div className='col-md-5'>
                </div>
                </div>
            </div>

            <div className="b-example-divider"></div>

            <div className='container-fluid row featurette'>
                <div className='col-md-7 order-md-2'>
                    <h2 className='featurette-heading fw-normal lh-1'>Oh yeah, it’s that good. <span className='text-body-secondary'>See for yourself.</span></h2>
                    <p className='lead'>Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className='col-md-5 order-md-1'>
                    <svg className='bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto' width='500' height='500' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Placeholder: 500x500' preserveAspectRatio='xMidYMid slice' focusable='false'><title>Placeholder</title><rect width='100%' height='100%' fill='var(--bs-secondary-bg)'/><text x='50%' y='50%' fill='var(--bs-secondary-color)' dy='.3em'>500x500</text></svg>
                </div>
            </div>
        </div>
        </>
    );
}

export default Accueil;