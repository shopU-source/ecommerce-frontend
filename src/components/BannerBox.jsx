import PropTypes from "prop-types";

function BannerBox({ img }) {
  return (
    <div className="bannerBox inline-block group">
      <img
        src={img}
        alt="Hello"
        className="shadow-lg border-2 border-[#e4f0d4] transition-all group-hover:scale-105"
      />
    </div>
  );
}

BannerBox.propTypes = {
  img: PropTypes.string.isRequired,
};

export default BannerBox;
