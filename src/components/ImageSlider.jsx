
import React from "react"
import Instalacion1 from "../assets/bg_instalaciones/instalacion1.jpg"
import Instalacion2 from "../assets/bg_instalaciones/instalacion2.jpg"
import Instalacion3 from "../assets/bg_instalaciones/instalacion3.jpg"
import Instalacion4 from "../assets/bg_instalaciones/instalacion4.jpg"
import Instalacion5 from "../assets/bg_instalaciones/instalacion5.jpg"
import Instalacion6 from "../assets/bg_instalaciones/instalacion6.jpg"
import { useStaticQuery, graphql } from "gatsby"


function ImageSlider() {

    const data = useStaticQuery(
        graphql`
        query {
          allMarkdownRemark {
            nodes {
              html
              excerpt
              frontmatter {
                code
                first_slide_title
                second_slide_title
                third_slide_title
                fourth_slide_title
                fifth_slide_title
                sixth_slide_title
                first_slide_description
                second_slide_description
                third_slide_description
                fourth_slide_description
                fifth_slide_description
                sixth_slide_description
              }
            }
          }
        }
        `
    )

    const myData = data.allMarkdownRemark.nodes.find(node => node.frontmatter.code === 'instalaciones');

    return (
        <div className=" ">
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={Instalacion1} class="d-block w-100 imageSlider" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{myData.frontmatter.first_slide_title}</h5>
                            <p>{myData.frontmatter.first_slide_description}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Instalacion2} class="d-block w-100 imageSlider" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{myData.frontmatter.second_slide_title}</h5>
                            <p>{myData.frontmatter.second_slide_description}</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Instalacion3} class="d-block w-100 imageSlider" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{myData.frontmatter.third_slide_title}</h5>
                            <p>{myData.frontmatter.third_slide_description}</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={Instalacion4} class="d-block w-100 imageSlider" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{myData.frontmatter.fourth_slide_title}</h5>
                            <p>{myData.frontmatter.fourth_slide_description}</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={Instalacion5} class="d-block w-100 imageSlider" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{myData.frontmatter.fifth_slide_title}</h5>
                            <p>{myData.frontmatter.fifth_slide_description}</p>
                        </div>
                    </div>

                    <div class="carousel-item">
                        <img src={Instalacion6} class="d-block w-100 imageSlider" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>{myData.frontmatter.sixth_slide_title}</h5>
                            <p>{myData.frontmatter.sixth_slide_description}</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default ImageSlider

