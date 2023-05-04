const Footer = () => {
    const medias_sociaux = [
        {
            nom: 'Facebook',
            lien: 'https://www.facebook.com/etsesports',
            icone: 'fi fi-brands-facebook'
        },
        {
            nom: 'Instagram',
            lien: 'https://www.instagram.com/esports_ets/',
            icone: 'fi fi-brands-instagram'
        },
        {
            nom: 'Twitter',
            lien: 'https://twitter.com/ETSesports',
            icone: 'fi fi-brands-twitter'
        },
        {
            nom: 'Discord',
            lien: 'https://discord.com/invite/Rc8TUtgEMz',
            icone: 'fi fi-brands-discord'
        },
        {
            nom: 'Twitch',
            lien: 'https://www.twitch.tv/esports_ets',
            icone: 'fi fi-brands-twitch'
        },
        {
            nom: 'Youtube',
            lien: 'https://www.youtube.com/@etsesports',
            icone: 'fi fi-brands-youtube'
        },
        {
            nom: 'LinkedIn',
            lien: 'https://www.linkedin.com/company/ets-esport/',
            icone: 'fi fi-brands-linkedin'
        }
    ];


    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center px-5 py-4">
            <div className="col-md-2 justify-content-start d-flex">
                <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-white text-decoration-none lh-1">
                    <img src={require('../images/logos/LogoEsporTS.png')} alt='Logo EsporTS' height='128px'/>
                </a>
            </div>

            <div className='col-md-5'>
                <ul className="nav justify-content-center list-unstyled d-flex py-3">
                    {medias_sociaux.map((media) => (
                        <li className="ms-3"><a target='blank' href={media.lien} className='text-decoration-none text-white fs-3'><i className={media.icone} title={media.nom} alt={media.nom}></i></a></li>
                    ))}
                </ul>
                <a href='mailto:esports@etsmtl.ca' className='text-decoration-none text-white fw-bold fs-5'><div className='d-flex align-items-center justify-content-center'><i className="fi fi-rr-envelope"></i><span className='ps-2 pb-2'>esports@etsmtl.ca</span></div></a>
                <p className="text-body-secondary text-bold text-white pt-2">&copy; { new Date().getFullYear() } École de technologie supérieure - EsporTS</p>
            </div>

            <div className='col-md-2 justify-content-end d-flex'>
                <a href="https://www.etsmtl.ca/" target='blank'><img src={require('../images/logos/Logo_ETS_TypoBlanche_D_FR_1.png')} alt="Logo ÉTS" height='128px' /></a>
            </div>
            
        </footer>
    );
}

export default Footer; 
