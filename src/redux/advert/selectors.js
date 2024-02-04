import { createSelector } from 'reselect';

export const selectIsLoading = (state) => state.adverts.isLoading;
export const selectDataList = ({ adverts }) => adverts.data;

export const selectError = ({ adverts }) => adverts.error;

const selectPrevDataListLength = ({ adverts }) => adverts.prevDataListLength;
export const selectGetLimit = (state) => state.adverts.limit;

export const selectSelectedMake = ({ adverts }) => {
  if (adverts.selectedMake === 'All') {
    return '';
  } else {
    return adverts.selectedMake;
  }
};
export const selectPageNumber = ({ adverts }) => adverts.page;

export const selectShowLoadMore = createSelector(
  [selectGetLimit, selectPrevDataListLength],
  (limit, prevDataListLength) => {
    if (prevDataListLength < limit) {
      return false;
    } else {
      return true;
    }
  }
);
