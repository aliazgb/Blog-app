import { CloudinaryUploadResponse } from "types/ApiTypes";


export const uploadToCloudinary = async (file: File | Blob): Promise<string> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "ali.azgb");
  const res = await fetch(
    "https://api.cloudinary.com/v1_1/dpkihgx1r/image/upload",
    { method: "POST", body: formData }
  );
  const data: CloudinaryUploadResponse = await res.json();
  return data.secure_url;
};