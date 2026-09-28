export type PaymentStatus = "pending" | "paid" | "failed";
export type FulfillmentStatus = "unfulfilled" | "fulfilled";

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface Order {
  id: string;
  customerEmail: string | null;
  country: string | null;
  currency: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentStatus: PaymentStatus;
  fulfillmentStatus: FulfillmentStatus;
  stripePaymentId: string;
  createdAt: string;
}

/**
 * Point d'intégration pour la persistance des commandes (ex: Supabase).
 * Pour l'instant les commandes sont journalisées ; brancher un client
 * de base de données ici dès qu'il est disponible.
 */
export async function saveOrder(order: Order): Promise<void> {
  console.log("[order:created]", JSON.stringify(order));
}
