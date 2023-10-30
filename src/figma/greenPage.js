import style from "./styleGreen.module.css";
import { GiCheckMark } from "react-icons/gi";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";




function GreenPage() {



      return (
            <>
                  <header className={style.header}>
                        <div className={style.add}>
                              <div className={style.logo}>
                                    <GiCheckMark className={style.check} />
                                    <Link to="/" className={style.hOne}>KONSTANTIN CHAYKIN</Link>
                                    <h5>OFFICIAL MERCH</h5>
                              </div>

                              <div className={style.chart}>
                                    <h5>Wristmons Collection</h5>
                                    <h2>green hoodie</h2>
                                    <p>Kangaroo pocket with contrast stitching Embroidered dial of the Joker watch in the pocket Joker embroidery on the pocket Embroidered smile on the back under the hood</p>
                                    <span className={style.span}>Limited edition: 77 pcs.</span>
                                    <h3>CHF 499 -</h3>
                              </div>
                              <div className={style.radios}>
                                    
                                    <div className={style.radioOne}>

                                          <input className={style.color} type="radio" id="g" name="color" value="G" />
                                          <label className={style.labelGreen} for="g">G</label>

                                          <input className={style.color} type="radio" id="p" name="color" value="P" />
                                          <label className={style.labelPurple} for="p">P</label>

                                    </div>

                                    <div className={style.radioTwo}>

                                          <input className={style.size} type="radio" id="s" name="size" value="S" />
                                          <label className={style.labelSize} for="s">S</label>

                                          <input className={style.size} type="radio" id="m" name="size" value="M" />
                                          <label className={style.labelSize} for="m">M</label>

                                          <input className={style.size} type="radio" id="l" name="size" value="L" />
                                          <label className={style.labelSize} for="l">L</label>

                                          <input className={style.size} type="radio" id="xl" name="size" value="XL" />
                                          <label className={style.labelSize} for="xl">XL</label>


                                    </div>

                                    <span className={style.size}>Size chart</span>
                              </div>

                              <button>ADD TO CART</button>

                              <a href="#down" className={style.down}>
                                    <BsArrowDown className={style.arrow} />
                              </a>
                        </div>
                        <div className={style.slider}>

                        </div>

                        <RiShoppingBag3Line className={style.bag} />

                  </header>

                  <article>
                        <div className={style.green}></div>

                        <div className={style.main}>
                              <div className={style.oneSide}>
                                    <h2>DETAILS</h2>
                                    <span className={style.spanOne}>
                                          The cut and design of the hoodie is thought out to the smallest detail! This is the world's first lined hoodie! The soft and warm interior with the contrasting satin lining will not only keep you warm in cooling weather, but will also cool you in a hot space. The cuffs and waistband are ribbed for a snug fit.
                                    </span>
                                    <div className={style.imgOne} ></div>
                                    <span className={style.spanTwo}>
                                          On the back we made a bright embroidery of the famous smile. There is a barely noticeable, but very important inscription inside the hood - “1 of 77”, it is just a proof that one of the 77 hoodies from the very first and therefore the most valuable limited collection of Konstantin Chaykin is now yours!
                                    </span>
                                    <div className={style.imgTwo}></div>
                              </div>

                              <div className={style.mark}>
                                    <GiCheckMark className={style.check} />
                              </div>

                              <div className={style.twoSide}>
                                    <div className={style.imgOne}></div>
                                    <span className={style.spanOne}>
                                          The design of the hoodie is both bold and eye-catching, making it a perfect choice for any fan of the “Joker” watches or anyone looking to add some edgy style to their wardrobe. Made from high quality materials, this hoodie is embroidered with the iconic “Joker” dial peeking out of a spacious kangaroo pocket. On the back we made a bright embroidery of the famous smile. There is a barely noticeable, but very important inscription inside the hood - “1 of 77”, it is just a proof that one of the 77 hoodies from the very first and therefore the most valuable limited collection of Konstantin Chaykin is now yours!
                                    </span>
                                    <div className={style.imgTwo}></div>
                                    <span className={style.spanTwo}>
                                          Whether you're lounging at home or out and about, this hoodie is sure to turn heads and make a statement. It's a versatile piece that can be paired with jeans, leggings, or even dressed up with a trousers for a unique and daring look. With its high-quality materials, comfortable fit, and striking design, this hoodie sure to become a favorite in your collection.
                                    </span>
                              </div>


                        </div>

                        <div className={style.joker}>
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

                        <div className={style.green}></div>

                        <div id="down" className={style.footer}>
                              <div className={style.img}></div>
                              <div className={style.full}>
                                    <div className={style.imgChild}></div>
                                    <h3>J<span>o</span>ker</h3>
                              </div>


                        </div>
                  </article>


            </>
      )
}



export default GreenPage;