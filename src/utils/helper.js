// Filter function (filter algorithm)
export function filterData(input, list) {
    const filterArray = list.filter((res) => {
      // Converting both name to lowercase and then checking to remove case sensitivity.
      return res?.info?.name.toLowerCase().includes(input.toLowerCase());
    });
    return filterArray;
  }