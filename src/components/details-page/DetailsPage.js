import React from "react";
import "./detailspage.css";
import scribble from "../../../src/assets/scribble.svg";
import heroBanner from "../../../src/assets/herobanner.jpg";
import Tabs from "../tabs/Tabs";
import TabPane from "../tabs/TabPane";

const DetailsPage = () => {
  return (
    <>
      <div className="details__page__container">
        <div className="details__left__container">
          <div className="details__desc">
            <img src={scribble} alt="scribble" />
            <h2>Lorem Ipsum </h2>
            <p>Lorem ipsum dolor set </p>
            <span>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </span>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </span>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures.
            </span>
          </div>
        </div>
        <div className="details__right__container">
          <img src={heroBanner} alt="hero banner" />
        </div>
      </div>
      <div className="details__tabs">
        <Tabs>
          <TabPane title="Details 1">
            <div>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text
            </div>
          </TabPane>
          <TabPane title="Details 2">
            <div>
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour
            </div>
          </TabPane>
          <TabPane title="Details 3">
            <div>Details 3</div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default DetailsPage;
