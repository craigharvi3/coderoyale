const send = async (data, type) => {
  const response = await fetch("/api/plays", {
    method: "POST",
    body: JSON.stringify({
      ...data,
      type
    }),
    headers: { "Content-Type": "application/json" }
  });
  return response;
};

export { send };
