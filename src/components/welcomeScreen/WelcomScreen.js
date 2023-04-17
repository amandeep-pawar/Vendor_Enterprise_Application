import React, { useEffect } from 'react'
import filterimg from '../../img/filter.png' ;
import loactionimg from '../../img/location.jpg'
import PureCounter from '@srexi/purecounterjs';

const WelcomScreen = () => {
    new PureCounter({
        selector: '.purecounter',
        start: 0, 
        end: 100,
        duration: 2,
        delay: 10,
        once: true,
        repeat: false,
        decimals: 0,
        legacy: true,
        filesizing: false,
        currency: false,
        separator: false,
    });
    return (
        <section id="hero" class="hero d-flex align-items-center">
            <div class="container">
                <div class="row gy-4 d-flex justify-content-between">
                    <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h2 data-aos="fade-up">Pick your services at your Location </h2>
                        <p data-aos="fade-up" data-aos-delay="100">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>
                        <div class="search-container p-1"><div class="location-icon d-flex justify-c align-items-center justify-content-center">
                            <div class="dropdown">
                                <button class="dropbtn">
                                    <img src={loactionimg} alt="Icon description" width="35" height="35" />
                                </button>
                                <div class="dropdown-content">
                                    <div class="slidecontainer">
                                        <input type="range" min="0" max="100" value="50" class="slider" id="range" />
                                        <p id="result"></p>
                                    </div>
                                </div>
                            </div>

                        </div><input type="text" placeholder="Search..." />
                            <div class="filter-icon d-flex justify-c align-items-center justify-content-center">
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        <img src={filterimg} alt="Icon description" width="35" height="35" />
                                    </button>
                                    <div class="dropdown-content">
                                        <a href="#">Link 1</a>
                                        <a href="#">Link 2</a>
                                        <a href="#">Link 3</a>
                                    </div>
                                </div>

                            </div><button type="submit" class="btn search-button">Search</button></div>
                        <div class="row gy-4" data-aos="fade-up" data-aos-delay="400">
                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="232" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Clients</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Projects</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="1453" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Support</p>
                                </div>
                            </div>

                            <div class="col-lg-3 col-6">
                                <div class="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="32" data-purecounter-duration="1" class="purecounter"></span>
                                    <p>Workers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                        <img src="assets/img/hero-img.svg" class="img-fluid mb-3 mb-lg-0" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WelcomScreen