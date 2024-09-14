import pizza from "../Components/Assest/pizza.jpeg";
import fast_food from "../Components/Assest/fast-food.jpeg";
import wings from "../Components/Assest/chicken-wings.jpeg";
import indian_food from "../Components/Assest/indina-food.jpeg";
import italian_food from "../Components/Assest/italian_food.jpg";
import japanese_food from "../Components/Assest/japanese_food.jpg";
import spanish_food from "../Components/Assest/spanish_food.jpg";
import sea_food from "../Components/Assest/sea_food.jpeg";

import {
  FaCar,
  FaFishFins,
  FaRegCalendarCheck,
  FaUsers,
} from "react-icons/fa6";
import { FaLeaf } from "react-icons/fa";
import { BsCoin } from "react-icons/bs";

export const foodData = [
  {
    id: 1,
    name: "Double CheeseBurger",
    Category: "burger",
    img: "https://media.istockphoto.com/id/617759204/photo/steakhouse-double-bacon-cheeseburger.jpg?s=612x612&w=0&k=20&c=QRaHtrxJsmNKOlOTkvxyE-o-3kM-Me1zU320yPT8ycI=",
    price: "$",
  },
  {
    id: 2,
    name: "Bacon CheeseBurger",
    Category: "burger",
    img: "https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.jpg?s=612x612&w=0&k=20&c=3HWrUVnS-FsJETFlCWnDH2-1ekJ0ic3T3XPrhLjpo98=",
    price: "$$",
  },
  {
    id: 3,
    name: "Mushroom CheeseBurger",
    Category: "burger",
    img: "https://dishingouthealth.com/wp-content/uploads/2022/04/PortobelloBurgers_Square.jpg",
    price: "$$$",
  },
  {
    id: 4,
    name: "Loaded CheeseBurger",
    Category: "burger",
    img: "https://s23209.pcdn.co/wp-content/uploads/2022/07/220602_DD_The-Best-Ever-Cheeseburger_267.jpg",
    price: "$$$",
  },
  {
    id: 5,
    name: "Feta & Spinnach",
    Category: "pizza",
    img: "https://t4.ftcdn.net/jpg/01/81/58/17/360_F_181581704_7oMYqJUqI8mSPnXjHdXKiMvhe7bvJzoH.jpg",
    price: "$$",
  },
  {
    id: 6,
    name: "Supreme Pizza ",
    Category: "pizza",
    img: "https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg",
    price: "$",
  },
  {
    id: 7,
    name: "Meat Lovers",
    Category: "pizza",
    img: "https://st2.depositphotos.com/1692343/5730/i/450/depositphotos_57305519-stock-photo-homemade-hot-supreme-pizza.jpg",
    price: "$$$$",
  },
  {
    id: 8,
    name: "Cheese Pizza",
    Category: "pizza",
    img: "https://media.istockphoto.com/id/1393150881/photo/italian-pizza-margherita-with-cheese-and-tomato-sauce-on-the-board-on-grey-table-macro-close.jpg?s=612x612&w=0&k=20&c=kL0Vhg2XKBjEl__iG8sFv31WTiahdpLc3rTDtNZuD2g=",
    price: "$$$$",
  },
  {
    id: 9,
    name: "Kale Salad",
    Category: "salad",
    img: "https://www.spendwithpennies.com/wp-content/uploads/2018/07/healthy-kale-brocoli-salad-lemon-dressing-recipe-.jpg",
    price: "$$$$",
  },
  {
    id: 10,
    name: "Ceasar Salad",
    Category: "salad",
    img: "https://thumbs.dreamstime.com/b/chicken-caesar-salad-delicious-parmesan-cheese-dressing-croutons-115376441.jpg",
    price: "$$$$",
  },
  {
    id: 11,
    name: "Loaded Salad",
    Category: "salad",
    img: "https://cafedelites.com/wp-content/uploads/2017/05/Loaded-Greek-Chicken-Avocado-Salad-IMAGE-21.jpg",
    price: "$$$$",
  },
  {
    id: 12,
    name: "Fruit Salad",
    Category: "salad",
    img: "https://www.modernhoney.com/wp-content/uploads/2023/05/Fruit-Salad-10.jpg",
    price: "$$$$",
  },
  {
    id: 13,
    name: "Wings",
    Category: "chicken",
    img: "https://thumbs.dreamstime.com/b/crispy-fried-chicken-wings-wooden-table-kentucky-88919528.jpg",
    price: "$$$$",
  },
  {
    id: 14,
    name: "Baked Chicken",
    Category: "chicken",
    img: "https://media.istockphoto.com/id/531469196/photo/chicken-thighs.jpg?s=612x612&w=0&k=20&c=E3JBbXz_xVhOk1sikuVOgO8BufwAqgdk0hC417E0CqI=",
    price: "$$$$",
  },
  {
    id: 15,
    name: "Chicken Tenders",
    Category: "chicken",
    img: "https://www.shutterstock.com/image-photo/fried-breaded-chicken-tender-strips-600nw-2202131731.jpg",
    price: "$$$$",
  },
  {
    id: 15,
    name: "Chicken Kabob",
    Category: "chicken",
    img: "https://media.istockphoto.com/id/912629972/photo/chicken-kebab-with-bell-pepper.jpg?s=612x612&w=0&k=20&c=d9LhLaL-prEprEFKp-P1nKjnTG4si89jFbL9PD79vRI=",
    price: "$$$$",
  },
];

export const categories = [
  {
    id: 1,
    name: "Fast Food",
    img: fast_food,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 2,
    name: "Pizza",
    img: pizza,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 3,
    name: "Wings",
    img: wings,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 4,
    name: "Indian",
    img: indian_food,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 5,
    name: "Italian",
    img: italian_food,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 6,
    name: "Sea Food",
    img: sea_food,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 7,
    name: "Spanish",
    img: spanish_food,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
  {
    id: 8,
    name: "Japanese",
    img: japanese_food,
    date: "APRIL 11, 2016",
    info: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat officia ipsum, eos incidunt reiciendis vitae consequuntur enim magnam deleniti nam.",
  },
];

export const newsLetterBoxData = [
  {
    id: 1,
    title: "Reservation",
    subTitle: "Are highly recommended",
    icon: <FaRegCalendarCheck />,
  },
  {
    id: 2,
    title: "Parking",
    subTitle: "Valet Parking is available",
    icon: <FaCar />,
  },
  {
    id: 3,
    title: "Reservation",
    subTitle: "Smart casual",
    icon: <FaUsers />,
  },
  {
    id: 4,
    title: "Vegetarian",
    subTitle: "Vegetarian on request",
    icon: <FaLeaf on request />,
  },
  {
    id: 5,
    title: "Sea Food",
    subTitle: "See Food on request",
    icon: <FaFishFins on request />,
  },
  {
    id: 6,
    title: "Price",
    subTitle: "Adjustable and Cheep Prices request",
    icon: <BsCoin on request />,
  },
];
