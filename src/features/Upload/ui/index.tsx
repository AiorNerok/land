"use client";

import { useEffect, useState } from "react";
import {
  usePathStore,
  usePathStoreProps,
  PathUploadedENUM,
} from "../hook/usePathStore";

export const UploadForm = () => {
  const p = usePathStore();

  return (
    <div>
      {p.state === PathUploadedENUM.VACANCY && "VACANCY"}
      {p.state === PathUploadedENUM.RESUME && "RESUME"}
      {p.state === PathUploadedENUM.RESULTS && "RESULTS"}
      <button onClick={p.next}>click</button> 
    </div>
  );
};
