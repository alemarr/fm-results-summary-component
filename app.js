window.onload = async () => {
  let data = [];

  await fetch("/fm-results-summary-component/data.json")
    .then((res) => res.json())
    .then((json) => (data = json));

  const results = document.querySelector(".summary__results");

  // Total
  const totalElHtml =
    '<span class="summary__results__result__total">/ 100</span>';

  data.forEach((result) => {
    // Create result container
    const resultDiv = document.createElement("div");
    resultDiv.classList.add(
      "summary__results__result",
      `summary__${result.category.toLowerCase()}`
    );

    // Icon
    const iconEl = document.createElement("img");
    iconEl.classList.add("summary__results__result__icon");
    iconEl.setAttribute("src", result.icon);
    resultDiv.appendChild(iconEl);

    // Category
    const categoryEl = document.createElement("span");
    categoryEl.classList.add("summary__results__result__category");
    categoryEl.innerText = result.category;
    resultDiv.appendChild(categoryEl);

    // Result value
    const valueEl = document.createElement("span");
    valueEl.classList.add("summary__results__result__value");
    valueEl.innerHTML = `${result.score} ${totalElHtml}`;
    resultDiv.appendChild(valueEl);

    // Finally, append result
    results.appendChild(resultDiv);
  });
};
