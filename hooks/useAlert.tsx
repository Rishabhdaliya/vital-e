import { Snackbar } from "@/components/UI/Snackbar";
import React from "react";

export const useAlert = ({ notify, setNotify }: any) => {
  return (
    <div>
      <Snackbar notify={notify} setNotify={setNotify} />
    </div>
  );
};
