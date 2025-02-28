export const selectStyles = {
  control: (provided: any) => ({
    ...provided,
    minHeight: "40px",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
    fontSize: "12px",
    paddingLeft: "10px",
  }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "var(--devc-color-font-placeholder)",
  }),
  option: (provided: any) => ({
    ...provided,
    color: "var(--devc-color-font-primary)",
  }),
  indicatorSeparator: (provided: any) => ({
    ...provided,
    display: "none",
  }),
  menuList: (provided: any) => ({
    ...provided,
    fontSize: "12px",
  }),
};
