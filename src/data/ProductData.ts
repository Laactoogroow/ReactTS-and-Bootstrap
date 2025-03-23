type Product = {
  id: number;
  img: string;
  name: string;
  desc: string;
};

type DataType = Product[];

export const ProductData: DataType = [
  {
    id: 1,
    img: "/image/Happy1.jpeg",
    name: "Happy",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
        accusamus laboriosam tempore nam hic voluptatem!`,
  },
  {
    id: 2,
    img: "/image/Frosch.jpeg",
    name: "Frosch",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
        accusamus laboriosam tempore nam hic voluptatem!`,
  },
];
