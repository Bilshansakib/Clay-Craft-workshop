import { Fade } from "react-awesome-reveal";
const AwesomeReveal = () => {
  return (
    <div className="w-full bg-orange-50 shadow-sm">
      <Fade>
        <p className="text-5xl">Ceramics and Pottery At it's Best</p>
      </Fade>
      <Fade cascade>
        <p>Clay-made pottery</p>
        <p>...Stoneware...</p>
        <p>...Porcelain...</p>
        <p>...Terra Cotta...</p>
        <p>...Ceramics & Architectural...</p>
        <p>...Home decor pottery...</p>
      </Fade>
    </div>
  );
};

export default AwesomeReveal;
