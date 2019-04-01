<template>
  <div id="app">

    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/approach">Approach</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/workshops">Workshops</router-link> |
      <router-link to="/team">Team</router-link> |
      <router-link to="/book">Book</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <router-view/>
    -->
<!--== Start Header Area Wrapper ==-->
    <header class="header-area">
        <!-- Start Pre Header Area -->
        <div class="prehedaer-area-wrapper">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-8 col-xl-6 offset-xl-2 d-none d-sm-block">
                        <div class="pre-header-left d-sm-flex justify-content-center justify-content-lg-start">
                            <div class="pre-header-item">
                                <a href="tel:+31-6-254-26-731"><i class="fa fa-phone"></i> +31-6-25426731</a>
                            </div>

                            <div class="pre-header-item">
                                <span><i class="fa fa-clock-o"></i> Ma - Vr: 9:00 - 16:00</span>
                            </div>

                            <div class="pre-header-item">
                                <a href="mailto:info@dlab.nl"><i class="fa fa-envelope-o"></i> info@dlab.nl</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 d-none d-lg-block">
                        <div class="pre-header-right text-center text-md-right">
                            <div class="social-icons">
                                <a href="https://www.facebook.com/pg/DLab058/" target="_blank"><i class="fa fa-facebook"></i></a>
                                <a href="https://www.linkedin.com/company/dlab-friesland" target="_blank"><i class="fa fa-linkedin"></i></a>
                                <a href="https://www.instagram.com/dlab_lwd/" target="_blank"><i class="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Pre Header Area -->

        <!-- Start Header Bottom Area  -->
        <div class="header-bottom header-shape sticky-header">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-5 col-lg-2">
                        <!-- Start Logo Area -->
                        <div class="logo-area">
                            <a href="index.html"><img src="assets/img/DLab_Logo_FC100.png" alt="Logo" /></a>
                        </div>
                        <!-- End Logo Area -->
                    </div>

                    <div class="col-lg-8 d-none d-lg-block">
                        <!-- Start Navigation Area -->
                        <nav class="navigation-area">
                            <ul class="main-menu nav">
                                <li class="dropdown-navbar"><a href="index.html">Home</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="index.html">Home 01</a></li>
                                        <li><a href="index-2.html">Home 02</a></li>
                                        <li><a href="index-3.html">Home 03</a></li>
                                        <li><a href="index-4.html">Home 04</a></li>
                                        <li><a href="index-5.html">Home 05</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-navbar"><a href="project.html">Projects</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="project-fullwidth.html">Projects Fullwidth</a></li>
                                        <li><a href="project-2-column.html">Projects 2 Columns</a></li>
                                        <li><a href="project.html">Projects 3 Columns</a></li>
                                        <li><a href="project-4-column.html">Projects 4 Columns</a></li>
                                        <li><a href="project-details.html">Project Details 01</a></li>
                                        <li><a href="project-details-2.html">Project Details 02</a></li>
                                        <li><a href="project-details-3.html">Project Details 03</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-navbar"><a href="services.html">Our Services</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="services.html">Our Services 01</a></li>
                                        <li><a href="services-2.html">Our Services 02</a></li>
                                        <li><a href="services-3.html">Our Services 03</a></li>
                                        <li><a href="service-details.html">Service Details</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-navbar"><a href="about.html">About Us</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="about.html">About</a></li>
                                        <li><a href="about-location.html">Locations</a></li>
                                        <li><a href="about-awards.html">Awards</a></li>
                                        <li><a href="about-affiliate-partner.html">Affiliates & Partners</a></li>
                                        <li><a href="about-leadership.html">Leadership</a></li>
                                        <li><a href="about-core-values.html">Core Values</a></li>
                                        <li><a href="about-history.html">Our History</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-navbar"><a href="shop.html">Shop</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="shop.html">Product Page</a></li>
                                        <li><a href="single-product.html">Product Details</a></li>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                        <li><a href="checkout.html">Checkout</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-navbar"><a href="blog.html">Blog</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="blog-list-no-sidebar.html">Blog List No Sidebar</a></li>
                                        <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                        <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                        <li><a href="blog-grid.html">Blog Grid No Sidebar</a></li>
                                        <li><a href="blog.html">Blog Grid Left Sidebar</a></li>
                                        <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                        <li><a href="blog-details.html">Blog Post Details</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown-navbar"><a href="contact.html">Contact</a>
                                    <ul class="dropdown-nav">
                                        <li><a href="contact.html">Contact</a></li>
                                        <li><a href="contact-2.html">Contact 2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <!-- End Navigation Area -->
                    </div>

                    <div class="col-7 col-lg-2">
                        <!-- Start Header Action Area -->
                        <div class="header-action-area">
                            <ul class="action-buttons nav justify-content-end">
                                <li>
                                    <a href="#" class="btn-search">
                                        <i class="pe-7s-search"></i>
                                        <i class="pe-7s-close"></i>
                                    </a>
                                    <div class="header-search-box">
                                        <form action="#">
                                            <div class="search-box-content">
                                                <input type="search" placeholder="type here and hit enter" />
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li><a href="cart.html" class="btn-cart"><i class="pe-7s-cart"></i></a></li>
                                <li class="d-lg-none"><button class="btn-canvas-open"><i class="pe-7s-menu"></i></button></li>
                            </ul>
                        </div>
                        <!-- End Header Action Area -->
                    </div>
                </div>
            </div>
        </div>
        <!-- End Header Bottom Area  -->
    </header>
    <!--== End Header Area Wrapper ==-->
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

</style>
