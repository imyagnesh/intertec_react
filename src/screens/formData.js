import TextInput from "../components/textInput";

export const fields = [
  {
    name: "username",
    value: "",
    placeholder: "Username",
    component: TextInput,
    validate: value => {
      let errorMessage;
      if (!value) {
        errorMessage = "require";
      }
      return errorMessage;
    }
  },
  {
    name: "password",
    value: "",
    placeholder: "Password",
    type: "password",
    component: TextInput,
    validate: value => {
      let errorMessage;
      if (!value) {
        errorMessage = "Required...";
      }
      if (value && value.length < 3) {
        errorMessage = "short string...";
      }
      if (value && value.length > 15) {
        errorMessage = "long string...";
      }
      return errorMessage;
    }
  }
  //   {
  //     name: "users",
  //     value: [],
  //     defaultValue: { itemCode: "", trialStatus: "" },
  //     arrayFields: [
  //       {
  //         name: "itemCode",
  //         value: "",
  //         placeholder: "Username",
  //         component: TextInput,
  //         validate: value => {
  //           let errorMessage;
  //           if (!value) {
  //             errorMessage = "require";
  //           }
  //           return errorMessage;
  //         }
  //       },
  //       {
  //         name: "trialStatus",
  //         value: "",
  //         placeholder: "Password",
  //         type: "password",
  //         component: TextInput,
  //         validate: value => {
  //           let errorMessage;
  //           if (value && value.length < 3) {
  //             errorMessage = "short string...";
  //           }
  //           if (value && value.length > 15) {
  //             errorMessage = "long string...";
  //           }
  //           return errorMessage;
  //         }
  //       }
  //     ]
  //   }
];

export const productFields = [
  {
    name: "ProductName",
    value: "",
    placeholder: "Product Name",
    component: TextInput,
    validate: value => {
      let errorMessage;
      if (!value) {
        errorMessage = "require";
      }
      return errorMessage;
    }
  },
  {
    name: "ProductCategory",
    value: "",
    placeholder: "Product Category",
    component: TextInput,
    validate: value => {
      let errorMessage;
      if (!value) {
        errorMessage = "Required...";
      }
      if (value && value.length < 3) {
        errorMessage = "short string...";
      }
      if (value && value.length > 15) {
        errorMessage = "long string...";
      }
      return errorMessage;
    }
  },
  {
    name: "Price",
    value: "",
    placeholder: "Price",
    type: "number",
    component: TextInput
  }
];
