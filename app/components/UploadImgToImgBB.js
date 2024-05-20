import axios from "axios";

async function uploadImageToImgBB(imageData, apiKey) {
    try {
        const formData = new FormData();
        formData.append("image", imageData);

        const response = await axios.post(
            "https://api.imgbb.com/1/upload?key=" + apiKey,
            formData
        );
        const dataUrl = response.data.data.url;

        return dataUrl;
    } catch (error) {
        console.error("Error uploading image to ImgBB:", error);
        throw error;
    }
}

export default uploadImageToImgBB;
