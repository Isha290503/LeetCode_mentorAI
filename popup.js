const analyzeBtn = document.getElementById("analyzeBtn");
const problemName = document.getElementById("problem-name");
const result = document.getElementById("result");

analyzeBtn.addEventListener("click", async () => {

    result.innerText = "Extracting problem...";

    const [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.tabs.sendMessage(
        tab.id,
        {
            action: "getProblem"
        },
        async (response) => {

            if (chrome.runtime.lastError) {
                result.innerText =
                    "Please open a LeetCode problem page.";
                return;
            }

            if (!response) {
                result.innerText =
                    "Could not extract problem.";
                return;
            }

            problemName.innerText = response.title;

            const prompt = `
You are a DSA mentor.

Problem:
${response.description}

Code:
${response.code}

Return ONLY in the following format.

TIME_COMPLEXITY: <answer>

SPACE_COMPLEXITY: <answer>

CORRECTNESS: <one sentence>

PATTERN: <Hashing | Sliding Window | Two Pointers | Binary Search | DP | Graph | Tree | Greedy | Backtracking | Other>

OPTIMIZATION: <one sentence also provide working youtube video clickable link which solves this particular problem>

HINT_1: <one sentence>

HINT_2: <one sentence>

Also suggest 2 LeetCode problems with links that use the same pattern strictly it shouldn't involve any other pattern or data structure.

Return in this format:

RELATED_PROBLEM_1:
<problem name and problem link>

RELATED_PROBLEM_2:
<problem name and problem link>

Keep every answer very short.
`;

            result.innerText = "Analyzing with Gemini...";

            try {

                chrome.storage.sync.get(["gemini"], async (data) => {

                    const apiKey = data.gemini;

                    if (!apiKey) {
                        result.innerText =
                            "Gemini API key not found. Open Settings and save your API key.";
                        return;
                    }

                    const geminiResponse = await fetch(
                        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                contents: [
                                    {
                                        parts: [
                                            {
                                                text: prompt
                                            }
                                        ]
                                    }
                                ]
                            })
                        }
                    );

                    const dataJson = await geminiResponse.json();

                    console.log(dataJson);

                    if (dataJson.error) {
                        result.innerText =
                            `${dataJson.error.code}: ${dataJson.error.message}`;
                        return;
                    }

                    const analysis =
                        dataJson.candidates?.[0]?.content?.parts?.[0]?.text ||
                        "No analysis returned.";

                    result.innerText = analysis;

                });

            } catch (error) {

                console.error(error);

                result.innerText =
                    "Failed to connect to Gemini API.";

            }

        }
    );

});