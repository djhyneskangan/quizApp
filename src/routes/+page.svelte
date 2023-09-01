<script>
	export let data;
	let currentQuestionIndex = 0;
	let selectedAnswerIndex = -1;
	console.log(data);

	function goToNextQuestion() {
		if (currentQuestionIndex < data.questions.length - 1) {
			currentQuestionIndex++;
			selectedAnswerIndex = -1;
		}
	}

	function goToPreviousQuestion() {
		if (currentQuestionIndex > 0) {
			currentQuestionIndex--;
			selectedAnswerIndex = -1;
		}
	}

	// @ts-ignore
	function selectAnswer(index) {
		selectedAnswerIndex = index;
	}
</script>

<body class="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] items-center">
	<h1 class="pt-10 text-2xl text-slate-300">The Code Master Quiz</h1>

	<h4 class="mt-10 text-xl text-white/60">
		Question {currentQuestionIndex + 1} of {data.questions.length}
	</h4>
	<div class="mt-4 text-2xl text-white">
		{data.questions[currentQuestionIndex]?.question}
	</div>

	<div class="grid grid-cols-2 gap-4 py-5">
		{#each data.questions[currentQuestionIndex]?.answers as answer, index}
			<button
				class="bg-[#bae6fd]/80 py-4 px-6 rounded
				   {index === selectedAnswerIndex ? 'selected-answer' : ''}"
				on:click={() => selectAnswer(index)}
			>
				{answer}
			</button>
		{/each}
	</div>

	<div class="grid grid-rows-1 grid-cols-2 gap-4">
		<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4" on:click={goToPreviousQuestion}>
			Previous Question
		</button>

		<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4" on:click={goToNextQuestion}>
			Next Question
		</button>
	</div>

	<style>
		.selected-answer {
			background-color: #003366; /* Change this to the desired darker blue color */
			color: white;
		}
	</style>
</body>
