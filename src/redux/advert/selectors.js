export const selectIsLoading = (state) => state.adverts.isLoading;

export const selectDataList = ({ adverts }) => adverts.data;

export const selectError = ({ adverts }) => adverts.error;
