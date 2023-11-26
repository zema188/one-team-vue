export default function useCatalog() {
    function changeCatalog(btn, catalog) {
        catalog.filterList.forEach(el => {
            if(el.active) {
                el.active = false
            }
        });
        const index = catalog.filterList.findIndex(obj => obj.text === btn.text);
        catalog.activeSlide = index
        btn.active = true
    }

    function getFormattedDate() {
        const date = new Date();
        const day = date.getDate();
        const monthName = getMonthName(date.getMonth());
        return `${day} ${monthName}`;
      }
    
      function getMonthName(monthIndex) {
        const monthNames = [
          "января", "февраля", "марта", "апреля",
          "мая", "июня", "июля", "августа",
          "сентября", "октября", "ноября", "декабря"
        ];
        return monthNames[monthIndex];
      }
    return {
        changeCatalog, getFormattedDate
    }
}