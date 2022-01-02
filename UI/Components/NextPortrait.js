import Image from "next/image";

const NextPortrait = ({
  waterFall,
  waterFallProps,
  waterFallElements,
  src,
  classes,
  alt,
  layout,
  actionEvent,
}) => {
  console.log(waterFallElements);
  return (
    <div className={classes}>
      <Image
        className={`${waterFallElements ? "z-0 pointer-events-none" : ""} ${
          waterFall ? waterFallProps : ""
        }`}
        layout={layout}
        src={src}
        alt={alt}
        // onClick={(event) => actionEvent(event)}
      />
      {waterFallElements !== undefined && waterFallElements}
    </div>
  );
};

export default NextPortrait;
