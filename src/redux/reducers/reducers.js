const initialState = [
  {
    id: 0,
    name: "Chadnra",
    nric: "G0588750Q",
    dateOfBirth: "01/08/1992",
    phoneNumber: 87827544,
    dateOfActivity: "01/07/2022",
  },
];

const applyLicenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "APPLY_LICENSE":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};

export default applyLicenseReducer;
