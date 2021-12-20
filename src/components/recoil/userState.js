import axios from "axios";
import { atom, selector } from "recoil";

export const userState = atom({
  key: "userState",
  default: [],
});

export const userNewState = atom({
  key: "userNewState",
  default: 41,
});

export const userTotalState = atom({
  key: "userTotalState",
  default: 215,
});

export const userSecessionState = atom({
  key: "userSecessionState",
  default: 7,
});

export const userTotalecessionState = atom({
  key: "userTotalecessionState",
  default: 17,
});

export const getUserState = selector({
  key: "userStateRequest",
  get: async ({ get }) => {
    try {
      const res = await axios.get("/data/user.json");
      console.log("성공", res.data);
      return res.data;
    } catch (e) {
      return [];
    }
  },
  set: ({ set }, newValue) => {
    set(userState, newValue);
  },
});
