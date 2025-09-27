// import { subDomainList } from "./constant";

// export const getApps = () => {
//     const subdomain = getSubDomain(window.location.hostname);

//     const mainApp = subDomainList.find((app) => app.main);
//     if (subdomain === "") return mainApp.app;

//     const apps = subDomainList.find((app) => subdomain === app.subdomain);

//     return apps ? apps.app : mainApp.app;
// }

// // url.localhost
// // url.urlbestshort.com
// export const getSubDomain = (location) => {
//     const locationParts = location.split(".");
//     const isLocalhost = locationParts.slice(-1)[0] === "localhost";
//     const sliceTill = isLocalhost ? -1 : -2;
//     return locationParts.slice(0, sliceTill).join("");
// };

import { subDomainList } from "./constant";

export const getSubDomain = (hostname) => {
    const parts = hostname.trim().split(".");
    const isLocalhost = parts.slice(-1)[0] === "localhost";
    const sliceTill = isLocalhost ? -1 : -2;
    return parts.slice(0, sliceTill).join(".");
};

export const getApps = () => {
    const subdomain = getSubDomain(window.location.hostname);

    const mainApp = subDomainList.find((app) => app.main);
    if (!mainApp) {
        throw new Error("No main app defined in subDomainList");
    }

    if (subdomain === "") return mainApp.app;

    const matchedApp = subDomainList.find((app) => app.subdomain === subdomain);

    return matchedApp ? matchedApp.app : mainApp.app;
};
