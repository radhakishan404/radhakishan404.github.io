import $ from "jquery";

export function permalinkGenerate(val) {
    let permalink = $.trim(val);

    // replace more then 1 space with only one
    permalink = permalink.replace(/\s+/g, ' ');

    permalink = permalink.toLowerCase().replace(/\s+/g, '-');

    return permalink;
}