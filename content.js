function getProblemData() {

    const titleElement =
        document.querySelector('[data-track-load="description_content"] h1') ||
        document.querySelector('h1');

    const title = titleElement
        ? titleElement.innerText
        : document.title;

    const descriptionContainer =
        document.querySelector('[data-track-load="description_content"]') ||
        document.querySelector('.flexlayout__tabset_content');

    const description = descriptionContainer
        ? descriptionContainer.innerText
        : "Description not found";

    const editor =
        document.querySelector("#editor");

    const code = editor
        ? editor.innerText
        : "Code not found";

    return {
        title,
        description,
        code
    };
}

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {

        if (request.action === "getProblem") {

            sendResponse(getProblemData());

        }

        return true;
    }
);