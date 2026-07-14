import type { GiftMethod } from "@/types/gift";

export const gifts: GiftMethod[] = [
  {
    id: 1,

    type: "bank",

    title: "Bank BCA",

    accountName: "Yulianti Agustina",

    accountNumber: "1234567890",
  },

  {
    id: 2, 

    type: "qris",

    title: "QRIS",

    accountName: "Yulianti Agustina",

    image: "/images/gift/qris.png",
  },
];
