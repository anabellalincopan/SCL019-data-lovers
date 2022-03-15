// FUNCION  SORT PARA ORDENAR PERSONAJES

export const sortNewest = (data) => {
    const sortedYear = data.sort((a,b) => {
        return b.release_date - a.release_date;
    });
return sortedYear;
}

export const sortOldest = (data) => {
    const sortedOld = data.sort((a,b) => {
        return a.release_date - b.release_date;
    });
return sortedOld;
} 

export const sortAZ = (data) => {
  let sortedData=[];
  sortedData = data.sort((a,b) => {
      return a.title.localeCompare(b.title);
  });
  return sortedData;
}

export const sortZA = (data) => {
  let sortedRev=[];
  sortedRev = data.sort((a,b) => {
      return b.title.localeCompare(a.title);
  });
  return sortedRev;
}
