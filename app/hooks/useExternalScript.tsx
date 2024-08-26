import React, { useEffect } from "react";

const useExternalScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://files.coinmarketcap.com/static/widget/currency.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return {};
};

export default useExternalScript;
