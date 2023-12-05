export default function useCatalog() {
    function changeCatalog(btn, data) {
      console.log('catalog',data)
        data.filter.forEach(el => {
            if(el.active) {
                el.active = false
            }
        });
        const index = data.filter.findIndex(obj => obj.name === btn.name);
        data.activeSlide = index
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