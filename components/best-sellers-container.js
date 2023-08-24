import SectionTitle from "./section-title";
import TypecardProductStatusnorm from "./typecard-product-statusnorm";
import TypecardProductStatusDisc from "./typecard-product-status-disc";

const BestSellersContainer = () => {
  return (
    <section className="absolute top-[4082px] left-[300px] w-[1320px] flex flex-col items-center justify-start gap-[35px] text-center text-13xl text-black-25 font-input-text">
      <SectionTitle
        ctaText="Best sellers"
        sectionTitlePosition="unset"
        sectionTitleMargin="0"
        sectionTitleAlignSelf="stretch"
        orSubscribeToMargin="0"
      />
      <nav className="m-0 self-stretch flex flex-row items-center justify-between">
        <nav className="m-0 w-[373px] flex flex-row items-center justify-between text-left text-base text-dark-50 font-button-small">
          <a className="[text-decoration:none] relative w-[92px] h-[22px] text-dark hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <div className="absolute top-[0%] left-[0%] capitalize font-semibold">
              all products
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[51px] h-[22px] text-[inherit] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <div className="absolute top-[0%] left-[0%] capitalize font-semibold">
              t-shirt
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[63px] h-[22px] text-[inherit] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <div className="absolute top-[0%] left-[0%] capitalize font-semibold">
              hoodies
            </div>
          </a>
          <a className="[text-decoration:none] relative w-[46px] h-[22px] text-[inherit] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            <div className="absolute top-[0%] left-[0%] capitalize font-semibold">
              jacket
            </div>
          </a>
        </nav>
        <button className="cursor-pointer [border:none] py-[5px] px-[15px] bg-black flex flex-row items-center justify-start gap-[4px] hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25)]">
          <div className="w-5 h-5 hidden flex-row items-center justify-center">
            <div className="relative text-sm font-input-text text-white text-center flex items-center justify-center w-4 shrink-0">
              
            </div>
          </div>
          <div className="relative text-base capitalize font-button-small text-white text-left">
            show all
          </div>
        </button>
      </nav>
      <div className="self-stretch flex flex-col items-start justify-end">
        <div className="self-stretch flex flex-row items-start justify-center gap-[24px]">
          <TypecardProductStatusnorm
            productImageUrl="/imageproduct7@2x.png"
            bagDimensions="Dress"
            productPrice="$236.00"
            productName="Basic Dress Green"
            ribbon
            typecardProductStatusnormPosition="unset"
            typecardProductStatusnormFlex="1"
            typecardProductStatusnormTop="unset"
            typecardProductStatusnormLeft="unset"
            typecardProductStatusnormWidth="unset"
            topProductWidth="unset"
            topProductAlignSelf="stretch"
            bottomProductWidth="unset"
            bottomProductAlignSelf="stretch"
            bottomProductTextDecoration="unset"
            divLeft="252px"
            titleProductWidth="139px"
          />
          <TypecardProductStatusnorm
            productImageUrl="/imageproduct4@2x.png"
            bagDimensions="Bag"
            productPrice="$130.00"
            productName="Nike Sportswear Futura Luxe"
            ribbon={false}
            typecardProductStatusnormPosition="unset"
            typecardProductStatusnormFlex="1"
            typecardProductStatusnormTop="unset"
            typecardProductStatusnormLeft="unset"
            typecardProductStatusnormWidth="unset"
            topProductWidth="unset"
            topProductAlignSelf="stretch"
            bottomProductWidth="unset"
            bottomProductAlignSelf="stretch"
            bottomProductTextDecoration="unset"
            divLeft="252px"
            titleProductWidth="225px"
          />
          <TypecardProductStatusDisc
            productImageId="/imageproduct@2x.png"
            promotionLabel="sale"
            productDescription="Dress"
            productPrice="$155.00"
            productPrice2="$364.00"
            productName="Yellow Reserved Hoodie"
            ribbon
            typecardProductStatusDiscPosition="unset"
            typecardProductStatusDiscFlex="1"
            typecardProductStatusDiscTop="unset"
            typecardProductStatusDiscLeft="unset"
            typecardProductStatusDiscWidth="unset"
            topProductWidth="unset"
            topProductAlignSelf="stretch"
            backgroundBackgroundColor="#1e2832"
            hotHeight="unset"
            hotWidth="unset"
            hotTextAlign="left"
            bottomProductWidth="unset"
            bottomProductAlignSelf="stretch"
            divLeft="252px"
            divLeft1="182.59px"
            titleProductWidth="186px"
          />
          <TypecardProductStatusDisc
            productImageId="/imageproduct6@2x.png"
            promotionLabel="sale"
            productDescription="shoe"
            productPrice="$198.00"
            productPrice2="$220.00"
            productName="Nike Air Zoom Pegasus"
            ribbon
            typecardProductStatusDiscPosition="unset"
            typecardProductStatusDiscFlex="1"
            typecardProductStatusDiscTop="unset"
            typecardProductStatusDiscLeft="unset"
            typecardProductStatusDiscWidth="unset"
            topProductWidth="unset"
            topProductAlignSelf="stretch"
            backgroundBackgroundColor="#1e2832"
            hotHeight="unset"
            hotWidth="unset"
            hotTextAlign="left"
            bottomProductWidth="unset"
            bottomProductAlignSelf="stretch"
            divLeft="252px"
            divLeft1="182.59px"
            titleProductWidth="177px"
          />
        </div>
        <div className="self-stretch flex flex-row py-0 px-2.5 items-center justify-between mt-[-300px]">
          <div className="w-10 h-10 flex flex-row items-center justify-center">
            <div className="relative flex items-center justify-center w-8 shrink-0">
              
            </div>
          </div>
          <div className="w-10 h-10 flex flex-row items-center justify-center">
            <div className="relative flex items-center justify-center w-8 shrink-0">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersContainer;
