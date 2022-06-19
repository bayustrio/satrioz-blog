import axios from "axios";
// checking image upload
export const checkImage = (image: File | null) => {
  const types = ["image/png", "image/jpeg"];
  let err = "";
  if (!image) return (err = "File does not exist.");

  if (image.size > 1024 * 1024)
    // 1mb
    err = "The largest image size is 1mb";

  if (!types.includes(image.type)) err = "The image type is png / jpeg";

  return err;
};

// post image
export const uploadImage = async (image: any | File) => {
  let url = "";
  try {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "gxdqycxv");
    formData.append("cloud_name", "not-have");
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/not-have/upload`,
      formData
    );
    url = data.secure_url;
    //  alert(url)
  } catch (err) {
    console.log(err);
  }
  return url;
};
