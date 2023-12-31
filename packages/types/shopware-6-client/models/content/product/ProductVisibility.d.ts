import { Product } from "./Product";
import { SalesChannel } from "../../system/sales-channel/SalesChannel";

/**
 * @public
 */
export type ProductVisibility = {
  visibility: number;
  productId: string;
  salesChannelId: string;
  product: Product | null;
  salesChannel: SalesChannel | null;
};
