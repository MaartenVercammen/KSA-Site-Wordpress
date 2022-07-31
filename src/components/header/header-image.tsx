import React, { useState, useEffect } from "react";
import ImageService from "../../services/imageService";
import { media } from "../../types/index";

const HeaderImage: React.FC = () => {
  const [Image, setImage] = useState<media>();
  const [Logo, setLogo] = useState<media>()

  useEffect(() => {
    getHeaderImage();
    getLogoImage();
  }, []);

  const getHeaderImage = async () => {
    const res = await ImageService.getImage(11);
    setImage(res.data);
  };

  const getLogoImage = async () => {
    const res = await ImageService.getImage(12);
    setLogo(res.data);
  }

  return (
    <div className="header-container">
      <img className="header-image" src={Image?.media_details.sizes.large.source_url} />
      <div className="header-overlay" min-height={Image?.media_details.sizes.large.height}>
        <img className="header-logo" src={Logo?.media_details.sizes.full.source_url}/>
      </div>
    </div>
  );
};

export default HeaderImage;
