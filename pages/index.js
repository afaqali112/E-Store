import ReactFullpage from '@fullpage/react-fullpage';

import HeaderSection from "../components/header-section";
import ExploreNewAndPopularStylesCont from "../components/explore-new-and-popular-styles-cont";
import TrendingSection from "../components/trending-section";
import BrandCollection from "../components/brand-collection";
import BestSellersContainer from "../components/best-sellers-container";
import Typedesktop from "../components/typedesktop";
import NewsletterInstagramContainer from "../components/newsletter-instagram-container";

const Index1 = () => {
 



  return (
    <div className="relative bg-white w-full ">
      <ReactFullpage
      //fullpage options
      scrollingSpeed={1000} /* Options here */
      autoScrolling={true}
      navigation={true}
      navigationTooltips={["Home", "Explore", "Trending", "Brands", "Best Sellers", "Newsletter"]}
      slidesNavigation={true}



      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
<div className="section h-full">
      <HeaderSection />
      </div>
      
       <div className="section h-[40rem]">
   
      <ExploreNewAndPopularStylesCont />
        </div>
      <div className="section h-[40rem]">
      <TrendingSection />
      </div>
      <div className="section">
      <BrandCollection />
      </div>
      <div className="section">
      <BestSellersContainer />
      </div>
      {/* <Typedesktop
       
      /> */}
      <div className="section">
      <NewsletterInstagramContainer />
      </div>

          </ReactFullpage.Wrapper>
        );
      }}
      />
        
    
    </div>
  );
};

export default Index1;
