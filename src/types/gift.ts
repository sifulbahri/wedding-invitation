export interface GiftMethod {
  id: number;
  type: "bank" | "qris";

  title: string;

  accountName: string;

  accountNumber?: string;

  image?: string;
}
