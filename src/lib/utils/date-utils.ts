export const createDate = (date: string | boolean | undefined) => {
    if (typeof date == "string") {
        return new Date(date).toISOString().substring(0, 10);
    }
    return "";
};