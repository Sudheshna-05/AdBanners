'use client'
import React from "react";
import { CircularProgress} from "@mui/material";
import { useEffect,useState } from "react";
import BannerImageComp from "@/public/editicon";
import EditBannerTemplateBs from "@/public/editbanner";
interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  background: string;
  cta: string;
  ctaUrl?: string; // Optional field
}
export default function Home()
{
    const [banners,setBanners]=useState<Banner[]>([]);
    const [loading, setLoading] = useState(true);
    const [editBanner, setEditBanner] = useState<Banner | null>(null);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
      const fetchBanners=async()=>{
        try{
        const response=await fetch("/AdBanners.json");
        if(!response.ok){
          throw new Error("failed to fetch data")
        }
        const jsonData= await response.json();
        setBanners(jsonData.banners);
        setLoading(false);
      } 
      catch(error){
        console.error("error fetching banners:",error);
        setLoading(false);
      }
      };
      fetchBanners();
    },[])

    const handleEditClick = (banner: Banner) => {
      setEditBanner(banner);
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
      setEditBanner(null);
    };

    const handleSave = (formData:Banner) => {
      if (editBanner) {
        // Update banner data - replace with actual save logic
        setBanners((prev) => prev.map((banner) =>
          banner.id === editBanner.id ? {...banner, ...formData } : banner
        ));
        handleClose();
      }
    };

  return(
    <React.Fragment>
      <section>
        <div>
          <h1> Advertisement Banners: </h1>
          {loading ? (<CircularProgress/>):(
          <div style={{ display: 'flex', justifyContent: 'space-between',flexWrap:'wrap' }}>
            {
              banners.map((banner)=>
              (
                <BannerImageComp key={banner.id} banner={banner} onEditClick={handleEditClick}/>
              ))}
          </div>
          )}
          </div>
      </section>
      <EditBannerTemplateBs open={open} banner={editBanner} onClose={handleClose} onSave={handleSave}/>
    </React.Fragment>
  )
}