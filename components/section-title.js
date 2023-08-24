import { useMemo } from "react";

const SectionTitle = ({
  ctaText,
  sectionTitlePosition,
  sectionTitleMargin,
  sectionTitleAlignSelf,
  orSubscribeToMargin,
}) => {
  const sectionTitleStyle = useMemo(() => {
    return {
      position: sectionTitlePosition,
      margin: sectionTitleMargin,
      alignSelf: sectionTitleAlignSelf,
    };
  }, [sectionTitlePosition, sectionTitleMargin, sectionTitleAlignSelf]);

  const orSubscribeToStyle = useMemo(() => {
    return {
      margin: orSubscribeToMargin,
    };
  }, [orSubscribeToMargin]);

  return (
    <div
      className="relative flex flex-row items-start justify-start text-center text-31xl text-dark font-input-text"
      style={sectionTitleStyle}
    >
      <div
        className="relative capitalize font-medium"
        style={orSubscribeToStyle}
      >
        {ctaText}
      </div>
    </div>
  );
};

export default SectionTitle;
