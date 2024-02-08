import {ModelItem} from "../App";
import abibasModel1 from './../assets/FotoAbibas/Treziod_2.0_Shoes_Red_GY0050_01_standard.webp';
import abibasModel2 from './../assets/FotoAbibas/iod-2-shoes-blue-gy0044-01-standard.webp';
import abibasModel3 from './../assets/FotoAbibas/egan-shoes-white-h01877-01-standard.webp';
import {v1} from "uuid";


export const abibasArr:ModelItem[] = [
    {
        id: v1(),
        model: 'TREZIOD',
        collection: '2023',
        price: '100200$',
        picture: abibasModel1,

    },
    {
        id: v1(),
        model: 'TREZIOD 2 ',
        collection: '2022',
        price: '200300$',
        picture: abibasModel2
    },
    {
        id: v1(),
        model: 'SAMBA VEGAN ',
        collection: 'SPEEDFUSION',
        price: '300400$',
        picture: abibasModel3
    }
]