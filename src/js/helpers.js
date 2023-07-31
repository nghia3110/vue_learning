const helpers = {
    formatMoney: function(money) {
        return money !== null
            ? new Intl.NumberFormat('en-DE').format(money)
            : 0;
    },

    formatDateToTable: function(date) {
        try {
            const newDate = new Date(date);
            return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
        } catch (e) {
            console.log(e);
            return "";
        }
    },

    formatCompanyName: function(name) {
        return (name == null || name == 'string')
            ? ''
            : name
    }
}

export default helpers;