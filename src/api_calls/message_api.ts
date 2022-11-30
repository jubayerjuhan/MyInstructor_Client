import { client } from "../client";

export const getMessages = async (id: string) => {
  try {
    const { data } = await client.get(`convo/get-messages/${id}`);
    return data;
  } catch (error: any) {
    alert(error.messages);
  }
};

export const sendMessageToServer = async (text: string, from: string) => {
  try {
    const { data } = await client.post(`convo/add-message`, {
      text,
      from,
      to: "admin",
    });
    return data;
  } catch (error: any) {
    alert(error.message);
  }
};

export const getConversations = async () => {
  try {
    const { data } = await client.get("convo/get-conversations");
    return data;
  } catch (error: any) {
    console.log(error.message);
    alert(error.message);
  }
};
