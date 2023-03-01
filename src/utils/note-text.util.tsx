const tagRegex = /(?<=^|[^\/])(#[A-Za-z0-9_.]+)/gim;

export function convertTags(text: string) {
    return text.replace(tagRegex, `<span class="tag">$1</span>`);
}