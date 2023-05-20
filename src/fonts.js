import { Font } from "@react-pdf/renderer";

// Đường dẫn tới font chữ
const fontPath = "./public/fonts/Roboto-Regular.ttf";

// Tải font chữ và đăng ký
export const registerFonts = () => {
  Font.register({ family: "Roboto", src: fontPath });
};
