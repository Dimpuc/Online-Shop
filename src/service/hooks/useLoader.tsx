import { useState } from "react";
import { CastomLoader } from "../../components/loader";

export const useLoader = () => {
  const [loading, setLoading] = useState(false);

  const onLoad = () => setLoading(true);
  const onFinishLoad = () => setLoading(false);

  return {
    loading,
    onLoad,
    onFinishLoad,
    component: CastomLoader,
  };
};
