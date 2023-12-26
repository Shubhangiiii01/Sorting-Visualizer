// Function to create or update array visualization using D3
function updateArrayVisualization(array) {
    const bars = d3.select('#container')
        .selectAll('div')
        .data(array);

    // Enter
    bars.enter().append('div')
        .style('width', '100%')
        .style('height', d => `${d * 4}px`)
        .style('background-color', '#87CEEB')
        .style('margin', '0 1px')
        .style('transition', 'background-color 0.3s');

    // Exit
    bars.exit().remove();

    // Update
    bars.style('height', d => `${d * 4}px`);
}

// Function to perform a swap transition using D3
async function swap(a, b) {
    const duration = 300;

    const tempAHeight = d3.select(a).style('height');
    const tempBHeight = d3.select(b).style('height');

    await d3.select(a).transition().duration(duration).style('height', tempBHeight);
    await d3.select(b).transition().duration(duration).style('height', tempAHeight);
}

// to highlight bars being compared
function highlightBars(index1, index2) {
    const barsElements = d3.selectAll("#container div");
    barsElements.filter((d, i) => i === index1 || i === index2)
        .style("background-color", "#FFD700");
}

// to highlight the key element for Insertion Sort
function highlightKey(index) {
    const barsElements = d3.selectAll("#container div");
    barsElements.filter((d, i) => i === index)
        .style("background-color", "#66CDAA");
}

// to reset the color of bars
function resetColor(index1, index2) {
    const barsElements = d3.selectAll("#container div");
    if (index1 >= 0) {
        barsElements.filter((d, i) => i === index1)
            .style("background-color", "#87CEEB");
    }
    if (index2 >= 0) {
        barsElements.filter((d, i) => i === index2)
            .style("background-color", "#87CEEB");
    }
}

export {
    updateArrayVisualization,
    swap,
    highlightBars,
    highlightKey,
    resetColor
};
