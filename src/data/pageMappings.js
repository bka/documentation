import api from "./api";
import documentation from "./guides";

import { IsDefinedFunctor } from "../util/functors";


// import() doesn't accept dynamic values/variables
// to emulate the behaviour of dynamic importing wrap the import statement with its string literal in a callback
export const pageImportInfoCollection = Object.freeze({
    home: createPageImportInfo(() => import("../views/home-view.js")),
    api: createPageImportInfo(() => import("../views/api-view.js"), api.pages),
    documentation: createPageImportInfo(() => import("../views/documentation-view.js"), documentation.pages),
    download: createPageImportInfo(() => import("../views/download-view.js")),
    contacts: createPageImportInfo(() => import("../views/contacts-view.js")),
    search: createPageImportInfo(() => import("../views/search-view.js")),
});

export function tryGetSubpage(version, page, subpage) {
    const ftor = IsDefinedFunctor(pageImportInfoCollection[version])
        .map(pages => pages[page])
        .map(pageInfo => pageInfo.subpages && pageInfo.subpages[subpage]);

    return ftor.valueOf()
        ? ftor
        : IsDefinedFunctor(getSubpageSuggestion(subpage));
}

export function hasMovedModifier(page, newSubpageData) {
    return createPageInfo(page, newSubpageData, { hasMoved: true });
}


function createPageImportInfo(importTargetCall, subpages = undefined) {
    return Object.freeze({
        importTarget: importTargetCall,
        subpages,
        requiresSubpage: !!subpages
    });
}

function getSubpageSuggestion(version, subpage) {
    if (api.pages[version] && api.pages[version][subpage]) {
        return createSubpageSuggestion(`api`, api.pages[version][subpage]);
    }

    if (documentation.pages[version] && documentation.pages[version][subpage]) {
        return createSubpageSuggestion(`documentation`, documentation.pages[version][subpage]);
    }
}

function createSubpageSuggestion(page, subpageData) {
    return createPageInfo(page, subpageData, { isSuggestion: true });
}


function createPageInfo(page, subpageData, meta) {
    return Object.freeze({
        page,
        // page might get overwritten here. this is ok, because subpageData is likely to come from a config file which shall have priority
        ...subpageData,
        ...meta
    });
}
