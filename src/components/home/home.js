import { useEffect } from "react";
import '../../assests/css/font-awesome.min.css';
import WOW from 'wowjs';



const Home = () => {
    useEffect(() => {
        new WOW.WOW({
          live: false
        }).init();
      }, [])

    return (
        <div>
       
        <section className="myhome" id="my-home">
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
                            <h2 className="intro-title wow fadeInUp">Senior Full-Stack Engineer</h2>
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
                                    <address className="intro-details">Lagos, Nigeria </address>
                                </li>
                            </ul>
                            <ul className="social-icon wow fadeInUp">
                                <li title='Linkedin'>
                                    <a href="https://www.linkedin.com/in/joshua-uwagwu" target="_blank" rel="noreferrer">
                                    <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li title='Twitter'>
                                    <a href="https://twitter.com/joshua_bytesant" target="_blank" rel="noreferrer">
                                    <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li title='Github'>
                                    <a href="https://github.com/josh-bytesant" target="_blank" rel="noreferrer">
                                    <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li title='Website'>
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
                                 <img src="	https://avatars.githubusercontent.com/u/60426671" alt="" className="img-fluid" />
                             </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
      
   
        <section className="mh-about" id="my-about">
            <div className="container">
                <div className="row section-separator">
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-img shadow-2 wow fadeInLeft about-image-container" data-wow-duration="2.0s" data-wow-delay="0.4s">
                            <img src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/ab-img.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="mh-about-inner">
                            <h2 className="wow fadeInRight about-image-container" data-wow-duration="0.8s" data-wow-delay="0.1s" >About Me</h2>
                            <p className="wow fadeInRight about-image-container" data-wow-duration="0.8s" data-wow-delay="0.2s" >Hello, I’m Joshua, a Full-Stack Software Engineer. 
                            I am passionate and highly skilled at solutions architecture design, development, and contributing ideas to solutions that make life easier for everyone in the internet age.</p>
                            <div className="mh-about-tag wow fadeInRight about-image-container" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                <ul>
                                    <li><span>.Net</span></li>
                                    <li><span>C#</span></li>
                                    <li><span>Java</span></li>
                                    <li><span>MVC</span></li>
                                    <li><span>SQL</span></li>
                                    <li><span>React</span></li>
                                    <li><span>Javascript</span></li>
                                </ul>
                            </div>
                            <a href="https://drive.google.com/file/d/1tW1AzwJTtd1oJBm5Yk1k6-f5khL6hTK-/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-fill wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.4s">Downlaod CV <i class="fa fa-download"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="mh-experince" id="my-experiences">
            <div className="bolor-overlay">
                <div className="container">
                    <div className="row section-separator">
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-education">
                                 <h3 className="wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
                                <div className="mh-education-deatils">

                                    <div className="mh-education-item wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.3s" >
                                        <h4>Advanced Diploma in Business Adminstration From <span>Univerity of Lagos</span></h4>
                                        <div className="mh-eduyear">2020-2021</div>
                                        <p>Business Management, Business Law, Strategic Business Communication, Business Environment, Business Statistics, Marketing Management </p>
                                    </div>                      

                                    <div className="mh-education-item wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.5s" >
                                        <h4>Statistics with Computer Science From <span>University of Benin</span></h4>
                                        <div className="mh-eduyear">2012-2016</div>
                                        <p>Statistics, Computer Science</p>
                                    </div>                      

                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-work">
                                 <h3>Work Experience</h3>
                                <div className="mh-experience-deatils">

                                    <div className="mh-work-item wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.4s" >
                                        <h4>Engineering Team Lead at <span>Seven-Up Bottling Company Limited</span></h4>
                                        <div className="mh-eduyear">2018-Present</div>
                                        <span>Responsibility :</span>
                                        <ul className="work-responsibility">
                                            <li><i className="fa fa-circle"></i>Code review</li>
                                            <li><i className="fa fa-circle"></i>Implementation of advanced features</li>
                                        </ul>
                                    </div>                       

                                    <div className="mh-work-item wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.6s" >
                                        <h4>IT Manager at <span>Dage Digital Limited</span></h4>
                                        <div className="mh-eduyear">2016-2018</div>
                                        <span>Responsibility :</span>
                                        <ul className="work-responsibility">
                                            <li><i className="fa fa-circle"></i>Supervision of developers</li>
                                            <li><i className="fa fa-circle"></i>Design and implemenation of business requirements</li>
                                        </ul>
                                    </div>                        

                                    <div className="mh-work-item  wow fadeInUp about-image-container" data-wow-duration="0.8s" data-wow-delay="0.7s" >
                                        <h4>Web Developer at <span>Thought Studios Limited</span></h4>
                                        <div className="mh-eduyear">2015-2016</div>
                                        <span>Responsibility :</span>
                                        <ul className="work-responsibility">
                                            <li><i className="fa fa-circle"></i>Design and implemenation of business requirements</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
}
export default Home