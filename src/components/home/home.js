import '../../assests/css/font-awesome.min.css';



const Home = () => {
    
    return (
        /*
         ===================
            HOME 
        ===================
        */
        <section className="myhome" id="myhome">
            <div className="container">
                <div className="row home-padding">
                    <div className="col-sm-6">
                        <div className="intro-header-info">
                            <div className="intro-in mb-4 wow fadeInUp">
                                <span>
                                    Hello I'm
                                </span>
                            </div>
                            <h2 className="intro-name wow fadeInUp">Joshua Uwagwu</h2>
                            <h2 className="intro-title wow fadeInUp">Senior Full-Stack Developer</h2>
                            <ul>
                                <li className="wow fadeInUp">
                                    <i className="fa fa-envelope"></i>
                                    <a className="intro-details" href="mailto:">chuksjosh20@gmail.com</a>
                                </li>
                                <li className="wow fadeInUp">
                                    <i className="fa fa-phone"></i>
                                    <a className="intro-details" href="callto:">+234 816 339 0019</a>
                                </li>
                                <li className="wow fadeInUp">
                                    <i className="fa fa-map-marker"></i>
                                    <address className="intro-details">44B, Joseph Lambo St, Ebute-Metta, Lagos, Nigeria </address>
                                </li>
                            </ul>
                            <ul className="social-icon wow fadeInUp">
                                <li>
                                    <a href="https://www.linkedin.com/in/joshua-uwagwu-a1bab6152">
                                    <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/joshua_bytesant">
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/josh-bytesant">
                                    <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://joshuauwagwu.netlify.app">
                                    <i className="fa fa-globe"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="intro-hero-img wow fadeInUp">
                             <div className="intro-hero-img-border">
                                 <img src="	http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/hero.png" className="img-fluid" />
                             </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Home