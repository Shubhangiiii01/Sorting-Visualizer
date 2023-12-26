//import d3.js
import { updateArrayVisualization, swap, highlightBars, highlightKey, resetColor } from 'App/d3.js';

// Global variables 
let bars = [];
let arraySize = 50; 
let animationSpeed = 25; 
let animationStates = []; 
let currentStateIndex = 0; 

// Initial setup
function setup() {
    // Retrieve values from range inputs
    arraySize = document.getElementById("bars").value;
    animationSpeed = document.getElementById("delay").value;

    // Reset and generate new bars
    reset();
    generateBars();
}

// Function to set a custom array
function setCustomArray() {
    const customArrayInput = document.getElementById("customArray");
    const customArray = customArrayInput.value.split(',').map(Number);

    // Validate and set the custom array
    if (isValidArray(customArray)) {
        reset();
        generateBars(customArray);
    } else {
        alert("Invalid input. Please enter a valid comma-separated array.");
    }
}

// Function to check if an array is valid
function isValidArray(array) {
    return Array.isArray(array) && array.every(element => !isNaN(element));
}

// Function to change the soundtrack
function changeSoundtrack() {
    const soundtrackSelect = document.getElementById("soundtrack");
    const selectedSoundtrack = soundtrackSelect.value;

    // Retrieve the audio element
    const audioElement = document.getElementById("audioElement"); 

    // Map selected soundtrack to corresponding audio file
    const soundtrackMap = {
        "default": "path/to/default.mp3",
        "jazz": "path/to/jazz.mp3",
        "classical": "path/to/classical.mp3",
        "electronic": "path/to/electronic.mp3",
        "rock": "path/to/rock.mp3",
        "ambient": "path/to/ambient.mp3",
        "hiphop": "path/to/hiphop.mp3",
        "pop": "path/to/pop.mp3",
        "reggae": "path/to/reggae.mp3",
        "country": "path/to/country.mp3"
    };

    // Set the source of the audio element based on the selected soundtrack
    audioElement.src = soundtrackMap[selectedSoundtrack];

    // Play the audio
    audioElement.play();
}

// Function to rewind the sorting animation
function rewind() {
    if (currentStateIndex > 0) {
        currentStateIndex--;
        restoreState();
    }
}

// Function to replay the sorting animation
function replay() {
    if (currentStateIndex < animationStates.length - 1) {
        currentStateIndex++;
        restoreState();
    }
}

// Bubble Sort
function BubbleSort() {
    // Bubble Sort algorithm implementation
    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {
            // Highlight bars being compared
            highlightBars(j, j + 1);
            if (bars[j] > bars[j + 1]) {
                // Swap bars if they are in the wrong order
                swap(j, j + 1);
            }
            // Reset color
            resetColor(j, j + 1);
        }
    }
    // Save the final state
    saveState();
}

// Selection Sort
function SelectionSort() {
    // Selection Sort algorithm implementation
    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < bars.length; j++) {
            // Highlight bars being compared
            highlightBars(minIndex, j);
            if (bars[j] < bars[minIndex]) {
                // Update minimum index if a smaller element is found
                minIndex = j;
            }
            // Reset color
            resetColor(minIndex, j);
        }
        // Swap the found minimum element with the first element
        swap(i, minIndex);
    }
    // Save the final state
    saveState();
}

// Insertion Sort
function InsertionSort() {
    // Insertion Sort algorithm implementation
    for (let i = 1; i < bars.length; i++) {
        let key = bars[i];
        let j = i - 1;
        // Highlight key element
        highlightKey(j + 1);
        while (j >= 0 && bars[j] > key) {
            // Move elements greater than key to one position ahead
            bars[j + 1] = bars[j];
            // Highlight bars being shifted
            highlightBars(j, j + 1);
            j = j - 1;
            // Reset color
            resetColor(j + 1, j);
        }
        bars[j + 1] = key;
        // Reset color for the key
        resetColor(j + 1);
    }
    // Save the final state
    saveState();
}

// Merge Sort
function MergeSort() {
    // Merge Sort algorithm implementation
    mergeSort(0, bars.length - 1);
    // Save the final state
    saveState();
}

function mergeSort(start, end) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);
        // Recursive calls to divide the array
        mergeSort(start, mid);
        mergeSort(mid + 1, end);
        // Merge the divided arrays
        merge(start, mid, end);
    }
}

function merge(start, mid, end) {
    const n1 = mid - start + 1;
    const n2 = end - mid;
    const leftArray = new Array(n1);
    const rightArray = new Array(n2);

    // Copy data to temporary arrays leftArray[] and rightArray[]
    for (let i = 0; i < n1; i++) {
        leftArray[i] = bars[start + i];
    }
    for (let j = 0; j < n2; j++) {
        rightArray[j] = bars[mid + 1 + j];
    }

    let i = 0; 
    let j = 0; 
    let k = start; 

    while (i < n1 && j < n2) {
        // Highlight bars being compared
        highlightBars(start + i, mid + 1 + j);
        if (leftArray[i] <= rightArray[j]) {
            bars[k] = leftArray[i];
            i++;
        } else {
            bars[k] = rightArray[j];
            j++;
        }
        k++;
        // Reset color
        resetColor(start + i - 1, mid + 1 + j - 1);
    }

    // Copy the remaining elements of leftArray[], if there are any
    while (i < n1) {
        bars[k] = leftArray[i];
        i++;
        k++;
    }

    // Copy the remaining elements of rightArray[], if there are any
    while (j < n2) {
        bars[k] = rightArray[j];
        j++;
        k++;
    }
}

// Quick Sort
function QuickSort() {
    // Quick Sort algorithm implementation
    quickSort(0, bars.length - 1);
    // Save the final state
    saveState();
}

function quickSort(low, high) {
    if (low < high) {
        // Partition the array and get the index of the pivot element
        const pivotIndex = partition(low, high);
        // Recursive calls to sort the subarrays
        quickSort(low, pivotIndex - 1);
        quickSort(pivotIndex + 1, high);
    }
}

function partition(low, high) {
    const pivot = bars[high];
    let i = low - 1; // Index of smaller element

    for (let j = low; j <= high - 1; j++) {
        // Highlight bars being compared
        highlightBars(j, high);
        if (bars[j] < pivot) {
            i++;
            // Swap bars if the current element is smaller than the pivot
            swap(i, j);
        }
        // Reset color
        resetColor(j, high);
    }

    // Swap the pivot element with the element at (i + 1)
    swap(i + 1, high);

    // Reset color for the pivot element
    resetColor(i + 1);

    return i + 1; 
}

// Heap Sort
function HeapSort() {
    // Heap Sort algorithm implementation
    const n = bars.length;

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    // Extract elements from the heap one by one
    for (let i = n - 1; i > 0; i--) {
        // Move the current root to the end
        swap(0, i);
        // Call max heapify on the reduced heap
        heapify(i, 0);
    }

    // Save the final state
    saveState();
}

function heapify(n, i) {
    let largest = i; 
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Highlight bars being compared
    highlightBars(left, right);

    // Compare with left child
    if (left < n && bars[left] > bars[largest]) {
        largest = left;
    }

    // Compare with right child
    if (right < n && bars[right] > bars[largest]) {
        largest = right;
    }

    // Reset color
    resetColor(left, right);

    // If the largest is not the root, swap and continue to heapify
    if (largest !== i) {
        swap(i, largest);
        heapify(n, largest);
    }
}

// Your existing reset function
function reset() {
    // Clear existing bars and reset any visualization state
    const container = document.getElementById("container");
    container.innerHTML = "";

    // Reset animation states
    animationStates = [];
    currentStateIndex = 0;

    // Generate new bars
    generateBars();
}

// generateBars function
function generateBars(customArray) {
    const container = d3.select("#container");

    // To use customArray if provided, otherwise generate a random array
    bars = customArray || generateRandomArray(arraySize);

    // Create bars in the container
    container.selectAll('div')
        .data(bars)
        .enter().append('div')
        .style('width', '100%')
        .style('height', d => `${d * 4}px`)
        .style('background-color', '#87CEEB')
        .style('margin', '0 1px')
        .style('transition', 'background-color 0.3s');

    // Save the initial state
    saveState();
}


// Function to generate a random array
function generateRandomArray(size) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1); 
    }
    return randomArray;
}

// Function to save the current state of the visualization
function saveState() {
    const currentState = bars.slice(); 
    animationStates.push(currentState);
}

// Function to restore the state of the visualization
function restoreState() {
    const container = document.getElementById("container");
    container.innerHTML = "";

    const currentState = animationStates[currentStateIndex];
    for (const barHeight of currentState) {
        const bar = document.createElement("div");
        bar.style.height = `${barHeight * 4}px`; 
        container.appendChild(bar);
    }
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

// to swap two bars
function swap(index1, index2) {
    const temp = bars[index1];
    bars[index1] = bars[index2];
    bars[index2] = temp;

    // to transition the swap visually
    const barsElements = d3.selectAll("#container div");
    barsElements.transition().duration(300)
        .attr("height", d => `${d * 4}px`)
        .style("background-color", d => d === bars[index1] || d === bars[index2] ? "#FFD700" : "#87CEEB")
        .on("end", function () {
            d3.select(this).style("background-color", "#87CEEB");
        });
}

