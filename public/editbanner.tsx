import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle,DialogContent,TextField, Button, DialogActions } from "@mui/material";

interface Banner {
  id: string;
  title: string;
  description: string;
  image: string;
  background: string;
  cta: string;
  ctaUrl?: string; // Optional field
}

interface EditBannerTemplateBsProps {
  open: boolean;
  banner: Banner | null;
  onClose: () => void;
  onSave: (formData: Banner) => void;
}

const EditBannerTemplateBs: React.FC<EditBannerTemplateBsProps> = ({ open, banner, onClose, onSave }) => {
  const [formData, setFormData] = useState<Banner>({
    id: "",
    title: "",
    description: "",
    image: "",
    background: "",
    cta: "",
    ctaUrl: "",
  });
  useEffect(()=>
  {
    if(banner){
      setFormData(banner);
    }
  }  ,[banner]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value }));
  };

  const handleSave = () => {
      onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Banner</DialogTitle>
      <DialogContent>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Background Color"
            name="background"
            value={formData.background}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CTA"
            name="cta"
            value={formData.cta}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="CTA URL"
            name="ctaUrl"
            value={formData.ctaUrl || ''}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          </DialogContent>
          <DialogActions>
          <Button onClick={onClose} color="primary">Cancle</Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
