import $ from "jquery";

export function permalinkGenerate(val) {
    let permalink = $.trim(val);

    // replace more then 1 space with only one
    permalink = permalink.replace(/\s+/g, ' ');

    permalink = permalink.toLowerCase().replace(/\s+/g, '-');

    return permalink;
}

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

export async function getPackageTotalDownload(name) {
    const url = "https://api.npmjs.org/downloads/range/2020-08-01:" + formatDate() + "/" + name;
    const response = await fetch(url, {
        method: 'GET'
    })
    const data = await response.json();

    let total = 0;

    if (data && data.downloads) {
        for (let i = 0; i < data.downloads.length; i++) {
            total = total + data.downloads[i].downloads;
        }
    }
    return total;
}

export function calcDate() {
    var diff = Math.floor(new Date().getTime() - new Date("2018,05,01").getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    return years
}