<script>
	export let data;
	let currentQuestionIndex = 0;
	console.log(data);

	function goToNextQuestion() {
		if (currentQuestionIndex < data.questions.length - 1) {
			currentQuestionIndex++;
		}
	}

	function goToPreviousQuestion() {
		if (currentQuestionIndex < data.questions.length + 1) {
			currentQuestionIndex--;
		}
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
		{#each data.questions[currentQuestionIndex]?.answers as answer}
			<button class="bg-[#bae6fd]/80 py-4 px-6 rounded">{answer}</button>
		{/each}
	</div>

	<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4" on:click={goToNextQuestion}>
		Next Question
	</button>

	<button class="bg-[#bae6fd]/80 py-4 px-6 rounded mt-4" on:click={goToPreviousQuestion}>
		Previous Question
	</button>
</body>
