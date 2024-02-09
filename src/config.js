import proPlanImg from "./assets/images/icon-pro.svg";
import arcadePlanImg from "./assets/images/icon-arcade.svg";
import advancedPlanImg from "./assets/images/icon-advanced.svg";

/**@type {{name:string,price:number,logo:string}[]} */
export const MEMBERSHIP_PLANS = [
  {
    name: "Arcade",
    price: 9,
    logo: arcadePlanImg,
  },
  {
    name: "Advanced",
    price: 12,
    logo: advancedPlanImg,
  },
  {
    name: "Pro",
    price: 15,
    logo: proPlanImg,
  },
];

/**@type {{name:string,title:string,description:string,price:number}[]} */
export const OPTIONAL_SERVICES = [
  {
    name: "online",
    title: "Online service",
    price: 1,
    description: "Access to multiplayer games",
  },
  {
    name: "storage",
    title: "Larger storage",
    price: 2,
    description: "Extra 1TB of cloud save",
  },
  {
    name: "customizable",
    title: "Customizable Profile",
    price: 2,
    description: "Custom theme on your profile",
  },
];
