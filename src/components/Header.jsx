import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        const header = document.getElementById('header');
        const logo = document.getElementById('header-logo');
        const scrollTrigger = 100;
        if (window.location.pathname === '/') {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= scrollTrigger) {
                    header.classList.add('scrolled');
                    logo.style.opacity = '1';
                } else {
                    header.classList.remove('scrolled');
                    logo.style.opacity = '0';
                }
            });
        } else {
            header.classList.add('scrolled');
            logo.style.opacity = '1';
        }
    }, []);

    return (
        <>
        <header id='header' className='d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1'>
            <div className='col-md-3 mb-2 mb-md-0'>
                <a href='/' id='header-logo' className='d-inline-flex link-body-emphasis text-decoration-none'>
                    <img src={require('../images/logos/LogoEsporTS.png')} alt='Logo EsporTS' height='64px'/>
                </a>
            </div>

            <ul className='nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 pe-5'>
                <li><a href='/' className='nav-link px-2 text-white'>Accueil</a></li>
                <li><a href='/equipes' className='nav-link px-2 text-white'>Équipes</a></li>
                <li><a href='/partenaires' className='nav-link px-2 text-white'>Partenaires</a></li>
                <li><a href='/contact' className='nav-link px-2 text-white'>Contact</a></li>
                <li><a href='/faq' className='nav-link px-2 text-white'>FAQ</a></li>
            </ul>
        </header>

        <script src='../main.js'></script>
        </>
    );
}

export default Header;