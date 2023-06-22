import { isArray } from "lodash";

// generate label for filter applied
export const getFilterMessage = ({ mayInclude, mustInclude, mustNotInclude }) => {
    let msg = [];
    if (mayInclude) {
        mayInclude = isArray(mayInclude) ? mayInclude : mayInclude.split(",");
        msg.push(`may include '${mayInclude.map(item => `"${item}"`).join(",")}`);
    }

    if (mustInclude) {
        mustInclude = isArray(mustInclude) ? mustInclude : mustInclude.split(",");
        msg.push(`must include '${mustInclude.map(item => `"${item}"`).join(",")}`);
    }

    if (mustNotInclude) {
        mustNotInclude = isArray(mustNotInclude) ? mustNotInclude : mustNotInclude.split(",");
        msg.push(`without '${mustNotInclude.map(item => `"${item}"`).join(",")}`);
    }
    return msg.join(" and ");
}