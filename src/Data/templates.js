import templateOneImg from "../Images/resume-template-one.JPG";
import templateTwoImg from "../Images/resume-template-two.JPG";
import templateThreeImg from "../Images/resume-template-three.JPG";
import templateFourImg from "../Images/resume-template-four.JPG"
import Template1 from "../Templates/Template1";
import Template2 from "../Templates/Template2";
import Template3 from "../Templates/Template3";
import Template4 from "../Templates/Template4";

export const templates = [
  {
    id: 1,
    template_name: "Template One",
    template_img: templateOneImg,
    template: <Template1 />,
  },
  {
    id: 2,
    template_name: "Template Two",
    template_img: templateTwoImg,
    template: <Template2 />,
  },
  {
    id: 3,
    template_name: "Template Three",
    template_img: templateThreeImg,
    template: <Template3/>,
  },
  {
    id: 4,
    template_name: "Template Four",
    template_img: templateFourImg,
    template: <Template4/>,
  },
];

