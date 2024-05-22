import {
    Apple,
    juice,
    vegetable,
    VegetableBarbcue
} from "../assets/video"
import {reactageRed , rectagleGreen , RectangleYellow} from "../assets/images"




export const hightlightsSlides = [
    {
      id: 1,
      textLists: [
        "Fresh fruits",
      ],
      video: Apple,
      videoDuration: 4,
    },
    {
      id: 2,
      textLists: [
        "Fresh Juice",
      ],
      video: juice,
      videoDuration: 4,
    },
    {
      id: 3,
      textLists: [
        "Fresh Vegetables",
      ],
      video: vegetable,
      videoDuration: 4,
    },
    {
      id: 4,
      textLists: [
        "Veg Barbecue",
      ],
      video:VegetableBarbcue,
      videoDuration: 4,
    },
  ];

  export const models = [
    {
      id: 1,
      title: "Experience the enchantment of our stunning 3D Apple Basket.",
      color: ["#D3C43E", "#ffe7b9", "#6f6c64"],
      img: RectangleYellow,
    },
    {
      id: 2,
      title: "Experience the enchantment of our stunning 3D Apple Basket.",
      color: ["#E61616", "#6395ff", "#21242e"],
      img: reactageRed,
    },
    {
      id: 3,
      title: "Experience the enchantment of our stunning 3D Apple Basket.",
      color: ["#16E637", "#ffffff", "#C9C8C2"],
      img: rectagleGreen,
    },
   
  ];
  
  export const sizes = [
    { label: '6.1"', value: "small" },
    { label: '6.7"', value: "large" },
  ];
  