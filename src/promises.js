let text = {};
const server = () => {
  const then = new Date().getSeconds();
  while (new Date().getSeconds() - 2 > then) {}
  return [
    {
      name: "user 1"
    }
  ];
};

text["res"] = server();
document.getElementById("app").innerText = JSON.stringify(text);
