import React from "react";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  background: string;
  cta: string;
  ctaUrl?: string; // Optional field
}

interface BannerImageCompProps {
  banner: Banner;
  onEditClick: (banner: Banner) => void;
}

const BannerImageComp: React.FC<BannerImageCompProps> = ({ banner, onEditClick }) => {
  return (
    <div style={{ backgroundColor: banner.background, padding: '10px', margin: '10px', width: '30%', borderRadius: '8px', position: 'relative' }}>
      <IconButton
        onClick={() => onEditClick(banner)}
        style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <EditIcon />
      </IconButton>
      <h3>{banner.title}</h3>
      <p>{banner.description}</p>
      <img src={banner.image} alt={banner.title} style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }} />
      <a href={banner.ctaUrl || '#'} style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', marginTop: '10px', display: 'inline-block' }}>
        {banner.cta}
      </a>
    </div>
  );
};

export default BannerImageComp;
