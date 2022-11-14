import { toast } from "material-react-toastify";
import { client } from "../client";

export const createGiftCard = async (amount: any, from: any, to: any) => {
  const giftcard = { amount, from, to };
  try {
    const { data } = await client.post("/create-giftcard", giftcard);
    if (data.success) return (window.location.href = "/giftcard-success");
  } catch (error: any) {
    toast.error(error.response.data.message);
    return {
      message: error.response.data.message,
    };
  }
};
