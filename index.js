exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    colors: {
      base: "#2b3339",
      line: "#3a4248",
      textPrimary: "#d3c6aa",
      textMuted: "#424a50",
      sidebarBase: "#2e363c",
    },
  });
};
