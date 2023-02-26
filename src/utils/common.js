const formatCurrency = (value) =>
  (value * 1000).toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });

export { formatCurrency };
