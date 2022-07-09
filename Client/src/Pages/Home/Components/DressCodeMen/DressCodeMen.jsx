import React from "react";
import { useHistory } from "react-router-dom";
import dressCodePic from "../../../../Assets/images/TheDressCode_Logo_CMYK__Stacked_DarkGrey.png";
import "./DressCodeMen.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import men1 from '../../../../Assets/images/images/men 1.jpg'
import men2 from '../../../../Assets/images/images/men 2.jpg'
import women1 from '../../../../Assets/images/images/women 1.jpg'
import women2 from '../../../../Assets/images/images/women 2.jpg'

const DressCodeMen = () => {


  var settings = {

    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const history = useHistory();

  const navigateClicked = () => {
    history.push("/AdditionalInfoPage");
    window.scrollTo(0, 0);
  };
  return (
    <>


      <div className='pic__container'>

        <Slider {...settings}>
          <div>
            <div className="mainContainerDressCode">
              <div className="innerContainerDressCode">
                <div className="dressCodeLeft">
                  <img src={dressCodePic} alt="" className="dressCodeImg" />
                </div>

                <div className="dressCodeRights">
                  <div className="verticalLine"></div>
                  <div className="topStylishTailTxtBtn">
                    <p className="personalStylingTxt">
                      Personal <span className="spPersonalStyling">Dressing</span>,
                      tailored <span className="spPersonalStyling">just</span> for{" "}
                      <span className="spPersonalStyling">you.</span>
                    </p>

                    {/* <button className="btnTakeStyleQuiz" onClick={navigateClicked}>
                      Take your style quiz
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mainContainerDressCode">
              <div className="innerContainerDressCode">
                <div className="dressCodeLeft">
                  <img src={dressCodePic} alt="" className="dressCodeImg" />
                </div>

                <div className="dressCodeRights">
                  <div className="verticalLine"></div>
                  <div className="topStylishTailTxtBtn">
                    <p className="personalStylingTxt">
                      Personal <span className="spPersonalStyling">Styling</span>,
                      tailored <span className="spPersonalStyling">just</span> for{" "}
                      <span className="spPersonalStyling">you.</span>
                    </p>

                    <button className="btnTakeStyleQuiz" onClick={navigateClicked}>
                      Take your style quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mainContainerDressCode">
              <div className="innerContainerDressCode">
                <div className="dressCodeLeft">
                  <img src={dressCodePic} alt="" className="dressCodeImg" />
                </div>

                <div className="dressCodeRights">
                  <div className="verticalLine"></div>
                  <div className="topStylishTailTxtBtn">
                    <p className="personalStylingTxt">
                      Personal <span className="spPersonalStyling">Styling</span>,
                      tailored <span className="spPersonalStyling">just</span> for{" "}
                      <span className="spPersonalStyling">you.</span>
                    </p>

                    <button className="btnTakeStyleQuiz" onClick={navigateClicked}>
                      Take your style quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="mainContainerDressCode">
              <div className="innerContainerDressCode">
                <div className="dressCodeLeft">
                  <img src={dressCodePic} alt="" className="dressCodeImg" />
                </div>

                <div className="dressCodeRights">
                  <div className="verticalLine"></div>
                  <div className="topStylishTailTxtBtn">
                    <p className="personalStylingTxt">
                      Personal <span className="spPersonalStyling">Styling</span>,
                      tailored <span className="spPersonalStyling">just</span> for{" "}
                      <span className="spPersonalStyling">you.</span>
                    </p>

                    <button className="btnTakeStyleQuiz" onClick={navigateClicked}>
                      Take your style quiz
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

    </>
  );
};

export default DressCodeMen;
