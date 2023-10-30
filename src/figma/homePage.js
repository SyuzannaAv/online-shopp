import { GiCheckMark } from "react-icons/gi";
import { RiShoppingBag3Line } from "react-icons/ri";
import {BsArrowDown} from "react-icons/bs";
import {BsArrowUp} from "react-icons/bs";
import {RxInstagramLogo} from "react-icons/rx";
import {FaTelegramPlane} from "react-icons/fa"
import {BsWhatsapp} from "react-icons/bs";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";





function HomePage () {


      const [more, setMore] = useState (false);

      const ChangeValue = () => {

            setMore (!more)
         
      }



      return (
            <>
                  <nav className={style.nav} id="up" >
                        <div className={style.logo}>
                              <GiCheckMark className={style.check} />
                              <Link to = "/" className={style.hOne}>KONSTANTIN CHAYKIN</Link>
                              <h5>OFFICIAL MERCH</h5>
                        </div>

                        <div className={style.about}>
                              <Link to = "/purplecollection" className={style.li}>PURPLE COLLECTION</Link>
                              <Link to = "/greencollection" className={style.li}>GREEN COLLECTION</Link>
                              <Link to = "/" className={style.li}>ABOUT</Link>
                              <Link to = "/" className={style.li}>CONTACT</Link>
                        </div>

                        <div className={style.insta}>
                              <Link to="/instagram" className={style.li}>INSTAGRAM</Link>
                              <Link to="/facebook" className={style.li}>FACEBOOK</Link>
                        </div>

                        <div>
                              <RiShoppingBag3Line className={style.bag} />
                        </div>
                  </nav>

                  <header className={style.header}>
                        <div className={style.main}>
                              <h2>Discover the first limited collection of hoodies</h2>
                              <div>
                                    <span>by </span>
                                    <div className={style.sign}></div>
                              </div>
                              <button onClick={ChangeValue} >{more ? "HIDE INFO" : "DISCOVER"}</button>
                              <p>{more ? "Kangaroo pocket with contrast stitching Embroidered dial of the Joker watch in the pocket Joker embroidery on the pocket Embroidered smile on the back under " : ""}</p>
                              <a href="#down" className={style.down}>
                                    <BsArrowDown  className={style.arrow} />
                              </a>

                        </div>

                        <div className={style.img}></div>
                  </header>

                  <article>
                        <div className={style.joker}>
                              <h3>J<span>O</span>KER</h3>
                              <p>These hoodies are a must-have for every fan of the iconic watches the “Joker” by Konstantin Chaykin. We presented hoodie in the most trendy shades - green and purple, as well as just 77 units in each color.</p>
                        </div>

                        <div className={style.boxOne}>
                              <div className={style.imgParple}></div>

                              <div className={style.purple}>
                                    <h5>Wristmons Collection</h5>
                                    <h2>purple hoodie</h2>
                                    <p>Kangaroo pocket with contrast stitching Embroidered dial of the Joker watch in the pocket Joker embroidery on the pocket Embroidered smile on the back under the hood</p>
                                    <span>Limited edition: 77 pcs.</span>
                                    <h3>CHF 499 -</h3>
                                    <Link to="/purplecollection" className={style.button}>EXPLORE</Link>
                                   
                              </div>
                        </div>      

                        <div className={style.boxTwo}>
                              <div className={style.green}>
                                    <h5>Wristmons Collection</h5>
                                    <h2>green hoodie</h2>
                                    <p>Kangaroo pocket with contrast stitching Embroidered dial of the Joker watch in the pocket Joker embroidery on the pocket Embroidered smile on the back under the hood</p>
                                    <span>Limited edition: 77 pcs.</span>
                                    <h3>CHF 499 -</h3>
                                    <Link to="/greencollection" className={style.button}>EXPLORE</Link>
                              </div>

                              <div className={style.imgGreen}></div>
                        </div>

                        <div className={style.form}>
                              <h2>more items will come soon</h2>
                              <form className={style.mail}>
                                    <input type="email" placeholder="E-mail"/>
                                    <button>get notified!</button>
                              </form>
                              <div className={style.info}>
                                    <span>STAY TUNED BY FOLLOWING US:</span>
                                    <div className={style.instaLogo}>
                                        <RxInstagramLogo />  
                                    </div>
                                    <a href="https://www.instagram.com"> <li>INSTAGRAM</li> </a>
                                    <div className={style.teleLogo}>
                                          <FaTelegramPlane />
                                    </div>
                                    <a href="https://www.telegram.com"> <li>TELEGRAM</li> </a>
                              </div>
                        </div>

                        <div className={style.boxThree}>
                              <h2>Collection features</h2>

                              <div className={style.features}>

                                    <div className={style.featuresBox}>
                                          <div className={style.imgLimited}></div>
                                          <h4>Limited edition</h4>
                                          <p>Chaykin’s exclusive limited edition collection celebrating the spirit of “Joker” watches. It features designs inspired by the favorite colors of the Joker - green & purple. <span>Just 77 units in each color.</span> </p>
                                    </div>

                                    <div className={style.featuresBox}>
                                          <div className={style.imgPremium}></div>
                                          <h4>Premium package</h4>
                                          <p>Wrapped in a silk paper and neatly folded into a sturdy cardboard box with a handle. This is how you will receive your hoodie.</p>
                                    </div>

                                    <div className={style.featuresBox}>
                                          <div className={style.imgHigh}></div>
                                          <h4>high-quality</h4>
                                          <p>French terry is soft and stretchy, plus it is a breathable fabric, which means that you won't get too hot when you wear it. Inner side made of satin lining will cool you in a hot space. All decorative elements are embroidered with durable high-quality threads.</p>  
                                    </div>

                              </div>
                        </div>

                        <div className={style.boxFour}>
                              <div className={style.imgJoker}></div>

                              <div className={style.postcard}>
                                    <h2>A POSTCARD SIGNED BY KONSTANTIN CHAYKIN </h2>
                                    <div className={style.signed}>
                                          <div className={style.text}>
                                                <span>Inside the green box you will find a small but very important gift, a postcard with a personal signature from Chaykin.</span>
                                                <div className={style.sign}></div>
                                          </div>
                                          <div className={style.photo}></div>
                                    </div>

                              </div>
                        </div>

                        <div className={style.line}></div>         
                        
                  </article>

                  <footer id="down" className={style.footer}>
                        <div className={style.foot}>
                              <GiCheckMark className={style.checki} />
                              <div className={style.mainFooter}>
                                    <ul>
                                          <Link to="/collection" className={style.li}>collection</Link>
                                          <Link to="/concept" className={style.li}>concept</Link>
                                          <Link to="/about" className={style.li}>about</Link>
                                    </ul>

                                    <ul>
                                          <Link to="/payments" className={style.li}>PAYMENTS</Link>
                                          <Link to="/delivery" className={style.li}>DELIVERY, DUTIES & TAXES</Link>
                                          <Link to="/policy" className={style.li}>RETURNS & REFUND POLICY</Link>
                                    </ul>

                                    <ul>
                                          <Link to="/Conditions" className={style.li}>Terms & Conditions</Link>
                                          <Link to="/Privacy Policy" className={style.li}>Privacy Policy</Link>
                                          <Link to="/Cookie Notice" className={style.li}>Cookie Notice</Link>
                                    </ul>

                                    <ul>
                                          <Link to="/payments" className={style.li}>instagram</Link>
                                          <Link to="/payments" className={style.li}>telegram</Link>
                                    </ul>

                              </div>

                        </div>

                        <div className={style.any}>
                              <h4>Any questions?</h4>
                              <div className={style.logos}>
                                    <div className={style.what}>
                                          <BsWhatsapp className={style.lg} />
                                          <button>Whatsapp</button>
                                    </div>

                                    <div className={style.what}>
                                          <FaTelegramPlane className={style.lg} />
                                          <button>Telegram</button>
                                    </div>

                                    <a href="#up" className={style.up}>
                                          <BsArrowUp  className={style.arrow} />
                                    </a> 
                              </div>
                              <span>© 2023   ALL RIGHTS RESERVED</span>
                             
                              

                        </div>


                  </footer>



                

                 
            </>
      )
}


export default HomePage;